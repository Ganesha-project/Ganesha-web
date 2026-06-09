import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PACKAGES_TAG = "packages";

function getRequestSecret(request) {
  const authHeader = request.headers.get("authorization");
  const bearerToken = authHeader?.startsWith("Bearer ")
    ? authHeader.slice("Bearer ".length)
    : null;

  return (
    bearerToken ||
    request.headers.get("x-revalidate-secret") ||
    request.nextUrl.searchParams.get("secret")
  );
}

async function parseBody(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

async function revalidatePackages(request) {
  const expectedSecret = process.env.REVALIDATE_SECRET;

  if (!expectedSecret) {
    return NextResponse.json(
      { message: "Missing REVALIDATE_SECRET configuration" },
      { status: 500 }
    );
  }

  if (getRequestSecret(request) !== expectedSecret) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  const body = await parseBody(request);
  const serviceId =
    body?.serviceId || request.nextUrl.searchParams.get("serviceId");
  const tags = [PACKAGES_TAG];

  if (serviceId) {
    tags.push(`${PACKAGES_TAG}:${serviceId}`);
  }

  tags.forEach((tag) => revalidateTag(tag));

  return NextResponse.json({
    revalidated: true,
    tags,
    now: new Date().toISOString(),
  });
}

export async function POST(request) {
  return revalidatePackages(request);
}

export async function GET(request) {
  return revalidatePackages(request);
}
