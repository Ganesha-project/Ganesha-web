import Link from "next/link";
import { TiHome } from "react-icons/ti";

const Breadcrumbs = ({ title, slug, categories }) => {

    return (
        <div className="breadcrumbs text-sm">
            <ul>
                <li>
                    <Link href="/article"
                    >
                        <TiHome />
                    </Link>
                </li>
                {categories ? (
                    <li>
                        <Link href={`/article/${categories.toLowerCase()}`}>
                            {categories}
                        </Link>
                    </li>
                ) : null}
                <li>
                    <Link
                        className="text-mainColor dark:text-baseColor"
                        href={`/article/${slug}`}>
                        {title}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Breadcrumbs;
