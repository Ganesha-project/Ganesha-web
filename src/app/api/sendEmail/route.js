import nodemailer from 'nodemailer';

export async function POST(req) {
    const body = await req.json();
    const { name, email, phone, message } = body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.NEXT_PUBLIC_USER,
            pass: process.env.NEXT_PUBLIC_APP_PASSWORD,
        },
    });

    // Opsi email untuk pengiriman ke Anda
    let mailOptionsToUs = {
        from: process.env.NEXT_PUBLIC_USER,
        to: process.env.NEXT_PUBLIC_USER,
        subject: `Pesan dari ${name}`,
        html: `
    <div style="font-family: Arial, sans-serif; color: #333;">
    <img
        src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/Header_09bb6e4fc8.png"
        alt="Banner"
        style="width: 100%; height: auto;"
    />
    <h1 style="background-color: #772A7D; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin-top: 40px;">
        New Messages!
    </h1>
    <div>
        <div style="background-color: #eae3eb; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Name
            </p>
            <p style="margin: 4px 0 0;">
                 ${name}
            </p>
        </div>
        <div style="background-color: #cfc1d0; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Email
            </p>
            <p style="margin: 4px 0 0;">
                 ${email}
            </p>
        </div>
        <div style="background-color: #eae3eb; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Phone
            </p>
            <p style="margin: 4px 0 0;">
                 ${phone}
            </p>
        </div>
        <div style="background-color: #cfc1d0; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Message
            </p>
            <p style="margin: 4px 0 0;">
                 ${message}
            </p>
        </div>
        <div style="display: flex; gap: 12px; margin-top: 12px;">
            <a href="https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg>
            </a>
            <a href="https://vt.tiktok.com/ZSjr142La/" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/company/ganesha-multi-kreatif/" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555739807086" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 13.85813 2.526454 15.630045 3.4863281 17.125 C 3.1744176 18.13616 2.3822345 20.433984 2.296875 20.71875 C 2.2133913 20.995281 2.4292191 21.277344 2.7167969 21.277344 C 2.8460577 21.277344 5.1168568 20.932017 6.140625 20.673828 C 7.6159334 21.593477 9.3497886 22 11.09375 22 C 17.48 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11.994141 4.0292969 C 16.946141 4.0292969 20.972656 8.0641938 20.972656 12.990234 C 20.972656 17.936234 16.946141 21.970703 11.994141 21.970703 C 10.456964 21.970703 8.827376 21.561563 7.359375 20.726562 L 6.953125 20.496094 L 6.5117188 20.630859 L 4.6289062 21.072266 L 5.0703125 19.222656 L 5.2070312 18.777344 L 4.9746094 18.367188 C 4.1623787 16.902748 3.7304688 14.979004 3.7304688 12.990234 C 3.7304688 8.0641938 7.736141 4.0292969 11.994141 4.0292969 z M 8.8320312 8.953125 C 8.7636825 8.9648459 8.7000371 8.9834122 8.6386719 9.0136719 C 8.3743047 9.1441388 8.0659642 9.3920278 7.8144531 9.8144531 C 7.4979425 10.334067 7.6562186 11.065953 8.3183594 12.123047 C 8.9766202 13.172507 10.06568 14.195327 10.267578 14.373047 C 10.946988 14.952667 11.747174 15.391872 12.443359 15.214844 C 12.755783 15.134847 13.485678 14.536054 13.541016 14.257812 C 13.561284 14.149401 13.548872 14.046373 13.533203 14.033203 C 13.517533 14.020033 13.462838 13.960109 13.396484 13.896484 C 13.267774 13.775254 12.78476 13.533937 12.746094 13.525391 C 12.707429 13.516844 12.66357 13.507742 12.638672 13.525391 C 12.499007 13.616856 12.128327 13.878224 11.958984 13.996094 C 11.828509 14.086624 11.562329 13.969879 11.148438 13.564453 C 10.987487 13.406769 10.61216 12.947098 10.267578 12.423828 C 9.8323153 11.737518 9.6533505 11.343479 9.7324219 11.228516 C 9.7914591 11.138557 9.9334718 11.039062 10.169922 10.929688 C 10.231287 10.899428 10.275261 10.865155 10.298828 10.798828 C 10.326918 10.72304 10.351562 10.557906 10.318359 10.429688 C 10.285157 10.30147 10.164037 10.18448 10.068359 10.125 C 9.9726827 10.06552 9.8345084 10.027007 9.7050781 10.041016 C 9.4592176 10.068523 9.1560261 10.130445 8.9453125 10.228516 C 8.9149575 10.243766 8.8844288 10.257462 8.8554688 10.271484 C 8.8432392 10.277894 8.8315839 10.283196 8.8203125 10.289062 C 8.8074935 10.295567 8.7950845 10.301684 8.7832031 10.308594 C 8.8203536 10.291382 8.8350705 10.246164 8.8320312 10.179688 C 8.8320312 9.9805033 8.865752 9.8695158 8.90625 9.8359375 C 8.9754213 9.7775479 8.9070476 9.6424911 8.8320312 9.4042969 L 8.8320312 8.953125 z"></path>
                </svg>
            </a>
        </div>
    </div>
</div>
        `,
    };

    // Opsi email untuk pengiriman ke pengguna
    let mailOptionsToUser = {
        from: process.env.NEXT_PUBLIC_USER,
        to: email,
        subject: 'Terima kasih telah menghubungi kami!',
        html: `
          <div style="font-family: Arial, sans-serif; color: #333;">
    <img
        src="https://cms-ganesha.ganeshaconsulting.co.id/uploads/Header_09bb6e4fc8.png"
        alt="Banner"
        style="width: 100%; height: auto;"
    />
    <h1 style="background-color: #772A7D; padding: 16px; color: #FFFFFF; font-size: 24px; font-weight: bold; margin-top: 40px;">
        New Messages!
    </h1>
    <div>
        <div style="background-color: #eae3eb; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Name
            </p>
            <p style="margin: 4px 0 0;">
                 ${name}
            </p>
        </div>
        <div style="background-color: #cfc1d0; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Email
            </p>
            <p style="margin: 4px 0 0;">
                 ${email}
            </p>
        </div>
        <div style="background-color: #eae3eb; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Phone
            </p>
            <p style="margin: 4px 0 0;">
                 ${phone}
            </p>
        </div>
        <div style="background-color: #cfc1d0; padding: 16px; border-bottom: 1px solid #ccc;">
            <p style="text-transform: uppercase; font-weight: bold; font-size: 14px; margin: 0;">
                Message
            </p>
            <p style="margin: 4px 0 0;">
                 ${message}
            </p>
        </div>
        <div style="display: flex; gap: 12px; margin-top: 12px;">
            <a href="https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg>
            </a>
            <a href="https://vt.tiktok.com/ZSjr142La/" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"></path>
                </svg>
            </a>
            <a href="https://www.linkedin.com/company/ganesha-multi-kreatif/" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61555739807086" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting" style="display: inline-block;">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#772A7D" width="50" height="50" viewBox="0 0 24 24">
                    <path d="M 12 2 C 6.48 2 2 6.48 2 12 C 2 13.85813 2.526454 15.630045 3.4863281 17.125 C 3.1744176 18.13616 2.3822345 20.433984 2.296875 20.71875 C 2.2133913 20.995281 2.4292191 21.277344 2.7167969 21.277344 C 2.8460577 21.277344 5.1168568 20.932017 6.140625 20.673828 C 7.6159334 21.593477 9.3497886 22 11.09375 22 C 17.48 22 22 17.52 22 12 C 22 6.48 17.52 2 12 2 z M 11.994141 4.0292969 C 16.946141 4.0292969 20.972656 8.0641938 20.972656 12.990234 C 20.972656 17.936234 16.946141 21.970703 11.994141 21.970703 C 10.456964 21.970703 8.827376 21.561563 7.359375 20.726562 L 6.953125 20.496094 L 6.5117188 20.630859 L 4.6289062 21.072266 L 5.0703125 19.222656 L 5.2070312 18.777344 L 4.9746094 18.367188 C 4.1623787 16.902748 3.7304688 14.979004 3.7304688 12.990234 C 3.7304688 8.0641938 7.736141 4.0292969 11.994141 4.0292969 z M 8.8320312 8.953125 C 8.7636825 8.9648459 8.7000371 8.9834122 8.6386719 9.0136719 C 8.3743047 9.1441388 8.0659642 9.3920278 7.8144531 9.8144531 C 7.4979425 10.334067 7.6562186 11.065953 8.3183594 12.123047 C 8.9766202 13.172507 10.06568 14.195327 10.267578 14.373047 C 10.946988 14.952667 11.747174 15.391872 12.443359 15.214844 C 12.755783 15.134847 13.485678 14.536054 13.541016 14.257812 C 13.561284 14.149401 13.548872 14.046373 13.533203 14.033203 C 13.517533 14.020033 13.462838 13.960109 13.396484 13.896484 C 13.267774 13.775254 12.78476 13.533937 12.746094 13.525391 C 12.707429 13.516844 12.66357 13.507742 12.638672 13.525391 C 12.499007 13.616856 12.128327 13.878224 11.958984 13.996094 C 11.828509 14.086624 11.562329 13.969879 11.148438 13.564453 C 10.987487 13.406769 10.61216 12.947098 10.267578 12.423828 C 9.8323153 11.737518 9.6533505 11.343479 9.7324219 11.228516 C 9.7914591 11.138557 9.9334718 11.039062 10.169922 10.929688 C 10.231287 10.899428 10.275261 10.865155 10.298828 10.798828 C 10.326918 10.72304 10.351562 10.557906 10.318359 10.429688 C 10.285157 10.30147 10.164037 10.18448 10.068359 10.125 C 9.9726827 10.06552 9.8345084 10.027007 9.7050781 10.041016 C 9.4592176 10.068523 9.1560261 10.130445 8.9453125 10.228516 C 8.9149575 10.243766 8.8844288 10.257462 8.8554688 10.271484 C 8.8432392 10.277894 8.8315839 10.283196 8.8203125 10.289062 C 8.8074935 10.295567 8.7950845 10.301684 8.7832031 10.308594 C 8.8203536 10.291382 8.8350705 10.246164 8.8320312 10.179688 C 8.8320312 9.9805033 8.865752 9.8695158 8.90625 9.8359375 C 8.9754213 9.7775479 8.9070476 9.6424911 8.8320312 9.4042969 L 8.8320312 8.953125 z"></path>
                </svg>
            </a>
        </div>
    </div>
</div>
        `,
    };

    try {
        // Kirim email ke Anda
        await transporter.sendMail(mailOptionsToUs);
        // Kirim email ke pengguna
        await transporter.sendMail(mailOptionsToUser);
        return new Response(JSON.stringify({ message: 'Email berhasil dikirim!' }), {
            status: 200,
        });
    } catch (error) {
        console.error('Gagal mengirim email:', error);
        return new Response(JSON.stringify({ message: 'Gagal mengirim email' }), {
            status: 500,
        });
    }
}