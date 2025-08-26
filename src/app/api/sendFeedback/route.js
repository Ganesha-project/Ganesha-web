import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message, rating } = body;

        // Validate input data
        if (!name || !email || !message || !rating) {
            return NextResponse.json(
                { message: 'Semua field harus diisi' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { message: 'Format email tidak valid' },
                { status: 400 }
            );
        }

        // Check environment variables
        if (!process.env.NEXT_PUBLIC_USER || !process.env.APP_PASSWORD) {
            return NextResponse.json(
                { message: 'Konfigurasi server tidak lengkap' },
                { status: 500 }
            );
        }

        // Create transporter with improved configuration
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.NEXT_PUBLIC_USER,
                pass: process.env.APP_PASSWORD,
            },
        });

        // Verify connection
        await transporter.verify();

        // Email content functions
        const getRatingText = (rating) => {
            const ratings = {
                1: 'Sangat Buruk',
                2: 'Buruk',
                3: 'Cukup',
                4: 'Baik',
                5: 'Sangat Baik'
            };
            return ratings[rating];
        };

        // Prepare emails
        const adminMailOptions = {
            from: process.env.NEXT_PUBLIC_USER,
            to: process.env.NEXT_PUBLIC_USER,
            subject: `Feedback Baru dari ${name} - Go Space`,
            html: `<div>...email content...</div>`
        };

        const customerMailOptions = {
            from: process.env.NEXT_PUBLIC_USER,
            to: email,
            subject: 'Terima Kasih atas Feedback Anda - Go Space',
            html: `<div>...email content...</div>`
        };

        // Send emails sequentially
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return NextResponse.json(
            { message: 'Feedback berhasil dikirim!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error details:', error);

        // Specific error handling
        if (error.code === 'EAUTH') {
            return NextResponse.json(
                { message: 'Kesalahan autentikasi email' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Terjadi kesalahan internal server' },
            { status: 500 }
        );
    }
}