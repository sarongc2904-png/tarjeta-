const fs = require('fs');
const path = require('path');

const logoBase64Path = path.join(__dirname, 'logo_base64.txt');
const outputPath = 'C:/Users/saro_/Desktop/tarjeta_sagitario_codigo_completo.html';

if (!fs.existsSync(logoBase64Path)) {
  console.error("Error: logo_base64.txt not found. Run extract_logo.js first.");
  process.exit(1);
}

const logoBase64 = fs.readFileSync(logoBase64Path, 'utf8');

const htmlContent = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Susana Mayorga | Comercializadora Sagitario</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="Tarjeta digital de Susana Mayorga, Ejecutiva de Cuenta en Comercializadora Sagitario. Soluciones premium de impresión de playeras y artículos promocionales.">
    <meta name="keywords" content="impresión, playeras, tazas, articulos promocionales, comercializadora sagitario, susana mayorga">
    <meta name="author" content="Comercializadora Sagitario">

    <!-- Fonts & Icons -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <script src="https://unpkg.com/@phosphor-icons/web"></script>

    <style>
        :root {
            --sag-green: #84cc16;
            --sag-green-hover: #65a30d;
            --sag-green-glow: rgba(132, 204, 22, 0.35);
            --sag-dark-bg: #050505;
            --sag-card-bg: rgba(18, 18, 18, 0.7);
            --sag-card-border: rgba(255, 255, 255, 0.08);
            --sag-card-hover-border: rgba(132, 204, 22, 0.4);
            --text-primary: #ffffff;
            --text-secondary: #9ca3af;
            --text-muted: #6b7280;
            --glass-gradient: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
            --accent-glow: radial-gradient(circle at 50% 50%, rgba(132, 204, 22, 0.15) 0%, transparent 60%);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
        }

        body {
            background-color: var(--sag-dark-bg);
            color: var(--text-primary);
            font-family: 'Plus Jakarta Sans', sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            overflow-x: hidden;
            padding: 20px 0;
            position: relative;
        }

        /* Ambient glowing background */
        .bg-glow-1 {
            position: fixed;
            top: -20%;
            left: 50%;
            transform: translateX(-50%);
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(132, 204, 22, 0.18) 0%, rgba(0,0,0,0) 70%);
            z-index: 1;
            pointer-events: none;
            filter: blur(80px);
        }

        .bg-glow-2 {
            position: fixed;
            bottom: -10%;
            right: -10%;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(132, 204, 22, 0.08) 0%, rgba(0,0,0,0) 70%);
            z-index: 1;
            pointer-events: none;
            filter: blur(50px);
        }

        /* Main Container */
        .container {
            width: 100%;
            max-width: 430px;
            padding: 0 16px 40px;
            position: relative;
            z-index: 10;
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        /* Cover Image & Profile Info Card */
        .profile-card {
            background: var(--sag-card-bg);
            border: 1px solid var(--sag-card-border);
            border-radius: 28px;
            overflow: hidden;
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            text-align: center;
            position: relative;
        }

        .cover-photo {
            height: 120px;
            background: linear-gradient(135deg, #0e1e05 0%, #1c3d0a 50%, #84cc16 100%);
            position: relative;
            overflow: hidden;
        }

        .cover-photo::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 50%);
        }

        .logo-container {
            width: 110px;
            height: 110px;
            margin: -55px auto 16px;
            position: relative;
            z-index: 2;
        }

        .logo-wrapper {
            width: 100%;
            height: 100%;
            border-radius: 24px;
            padding: 8px;
            background: rgba(10, 10, 10, 0.85);
            border: 2px solid var(--sag-card-border);
            box-shadow: 0 12px 24px rgba(0,0,0,0.5), 0 0 15px var(--sag-green-glow);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            overflow: hidden;
        }

        .logo-wrapper:hover {
            transform: scale(1.05) rotate(1deg);
            border-color: var(--sag-green);
            box-shadow: 0 12px 30px rgba(132, 204, 22, 0.25), 0 0 25px var(--sag-green-glow);
        }

        .logo-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            border-radius: 16px;
        }

        .profile-info {
            padding: 0 24px 28px;
        }

        h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2.1rem;
            font-weight: 700;
            letter-spacing: -0.03em;
            margin-bottom: 6px;
            background: linear-gradient(180deg, #ffffff 30%, #e5e7eb 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .role-badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            background: rgba(132, 204, 22, 0.1);
            border: 1px solid rgba(132, 204, 22, 0.25);
            color: var(--sag-green);
            padding: 4px 12px;
            border-radius: 30px;
            font-size: 0.72rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 12px;
        }

        .company-name {
            color: var(--text-secondary);
            font-size: 0.95rem;
            font-weight: 400;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
        }

        .bio-text {
            color: var(--text-secondary);
            font-size: 0.88rem;
            line-height: 1.6;
            margin-top: 14px;
            padding: 12px 16px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 16px;
            border: 1px solid rgba(255, 255, 255, 0.03);
            text-align: left;
        }

        .bio-text strong {
            color: var(--text-primary);
            font-weight: 600;
        }

        /* Action Buttons */
        .actions-group {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 24px;
            border-radius: 18px;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.98rem;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            border: 1px solid transparent;
            width: 100%;
            outline: none;
            user-select: none;
            position: relative;
            overflow: hidden;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .btn-primary {
            background: linear-gradient(135deg, var(--sag-green) 0%, #a3e635 100%);
            color: #050505;
            box-shadow: 0 8px 20px rgba(132, 204, 22, 0.3), 0 0 0 1px rgba(132, 204, 22, 0.1) inset;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px rgba(132, 204, 22, 0.45);
        }

        .btn-secondary {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--sag-card-border);
            color: var(--text-primary);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.08);
            border-color: var(--sag-green-hover);
            transform: translateY(-2px);
        }

        /* Active/Pressed state for buttons (user request: change color on click) */
        .btn:active {
            transform: scale(0.96) translateY(0);
            transition: transform 0.1s;
        }

        .btn-primary:active {
            background: #ffffff;
            color: #050505;
            box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
        }

        .btn-secondary:active {
            background: rgba(132, 204, 22, 0.25);
            border-color: var(--sag-green);
            color: var(--text-primary);
        }

        /* Section Titles */
        .section-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 12px;
            padding: 0 4px;
        }

        .section-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.15rem;
            font-weight: 700;
            color: var(--text-primary);
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .section-title i {
            color: var(--sag-green);
            font-size: 1.25rem;
        }

        .section-subtitle {
            font-size: 0.78rem;
            color: var(--text-muted);
            font-weight: 500;
        }

        /* Custom Services Grid */
        .services-container {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
        }

        .service-card {
            background: var(--sag-card-bg);
            border: 1px solid var(--sag-card-border);
            border-radius: 20px;
            height: 115px;
            padding: 14px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            position: relative;
            overflow: hidden;
            user-select: none;
        }

        /* Image Backgrounds for Services */
        .service-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-size: cover;
            background-position: center;
            opacity: 0.12;
            transition: all 0.4s ease;
            z-index: 1;
        }

        .service-card:hover::before {
            opacity: 0.22;
            transform: scale(1.08);
        }

        /* Set service cover backgrounds */
        .service-playeras::before { background-image: url('https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400'); }
        .service-tazas::before { background-image: url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=400'); }
        .service-publicitarios::before { background-image: url('https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=400'); }
        .service-recuerdos::before { background-image: url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400'); }
        .service-digitales::before { background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400'); }

        .service-card-content {
            position: relative;
            z-index: 2;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .service-icon {
            color: var(--sag-green);
            font-size: 1.6rem;
            background: rgba(132, 204, 22, 0.08);
            border-radius: 12px;
            padding: 6px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .service-title {
            font-size: 0.88rem;
            font-weight: 700;
            line-height: 1.3;
            color: #f3f4f6;
            margin-top: 8px;
            font-family: 'Outfit', sans-serif;
        }

        .service-card:hover {
            border-color: var(--sag-card-hover-border);
            transform: translateY(-3px);
            box-shadow: 0 8px 16px rgba(132, 204, 22, 0.08);
        }

        /* Color change & active design for service click (user request) */
        .service-card.active {
            background: rgba(132, 204, 22, 0.12);
            border-color: var(--sag-green);
            box-shadow: 0 0 15px rgba(132, 204, 22, 0.2);
            transform: scale(0.98);
        }

        .service-card.active .service-icon {
            background: var(--sag-green);
            color: #050505;
        }

        .service-card.active .service-title {
            color: var(--sag-green);
        }

        /* Checkmark indicator for selected services */
        .service-card::after {
            content: '\e1b6'; /* check icon code */
            font-family: 'Phosphor';
            position: absolute;
            top: 12px;
            right: 12px;
            font-size: 0.85rem;
            font-weight: bold;
            color: var(--sag-green);
            background: rgba(132, 204, 22, 0.15);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: scale(0.6);
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 3;
        }

        .service-card.active::after {
            opacity: 1;
            transform: scale(1);
        }

        /* Flyers Values/Highlights section */
        .highlights-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .highlight-item {
            background: rgba(18, 18, 18, 0.5);
            border: 1px solid var(--sag-card-border);
            border-radius: 16px;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 14px;
            transition: all 0.25s ease;
        }

        .highlight-item:hover {
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateX(4px);
        }

        .highlight-icon-wrapper {
            width: 38px;
            height: 38px;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--sag-green);
            font-size: 1.25rem;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .highlight-item:hover .highlight-icon-wrapper {
            background: rgba(132, 204, 22, 0.1);
            border-color: var(--sag-green);
        }

        .highlight-content {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .highlight-title {
            font-size: 0.86rem;
            font-weight: 700;
            color: #f3f4f6;
            font-family: 'Outfit', sans-serif;
        }

        .highlight-desc {
            font-size: 0.76rem;
            color: var(--text-secondary);
        }

        /* Interactive Quote Form Builder */
        .quote-form-card {
            background: var(--sag-card-bg);
            border: 1px solid var(--sag-card-border);
            border-radius: 24px;
            padding: 20px;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
        }

        .form-group {
            margin-bottom: 14px;
        }

        .form-label {
            display: block;
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-secondary);
            margin-bottom: 6px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .form-control {
            width: 100%;
            background: rgba(10, 10, 10, 0.6);
            border: 1px solid var(--sag-card-border);
            border-radius: 12px;
            padding: 12px 16px;
            color: var(--text-primary);
            font-family: 'Plus Jakarta Sans', sans-serif;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            outline: none;
        }

        .form-control:focus {
            border-color: var(--sag-green);
            box-shadow: 0 0 10px rgba(132, 204, 22, 0.15);
            background: rgba(10, 10, 10, 0.85);
        }

        select.form-control {
            appearance: none;
            -webkit-appearance: none;
            background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 16px;
            padding-right: 40px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 12px;
        }

        .badge-info {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            font-size: 0.72rem;
            color: var(--sag-green);
            background: rgba(132, 204, 22, 0.08);
            padding: 4px 8px;
            border-radius: 6px;
            margin-top: 4px;
        }

        /* Contact Details & Info Card */
        .contact-card {
            background: var(--sag-card-bg);
            border: 1px solid var(--sag-card-border);
            border-radius: 24px;
            padding: 18px;
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 14px;
            padding: 12px;
            border-radius: 16px;
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            user-select: none;
            border: 1px solid transparent;
        }

        .contact-item:hover {
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.03);
        }

        /* Active click state for contact items */
        .contact-item:active {
            background: rgba(132, 204, 22, 0.08);
            border-color: rgba(132, 204, 22, 0.2);
            transform: scale(0.98);
        }

        .contact-icon-wrapper {
            width: 42px;
            height: 42px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            font-size: 1.35rem;
            flex-shrink: 0;
            transition: all 0.3s ease;
        }

        .contact-item:hover .contact-icon-wrapper {
            color: var(--sag-green);
            background: rgba(132, 204, 22, 0.05);
            border-color: rgba(132, 204, 22, 0.3);
            box-shadow: 0 0 10px rgba(132, 204, 22, 0.1);
        }

        .contact-item.active .contact-icon-wrapper {
            color: #050505;
            background: var(--sag-green);
            border-color: var(--sag-green);
        }

        .contact-details {
            display: flex;
            flex-direction: column;
            gap: 2px;
        }

        .contact-label {
            font-size: 0.68rem;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .contact-value {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-primary);
            line-height: 1.4;
        }

        .contact-item.active .contact-value {
            color: var(--sag-green);
        }

        /* Social Icons Row */
        .social-row {
            display: flex;
            justify-content: center;
            gap: 16px;
            margin: 12px 0;
        }

        .social-link {
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: rgba(18, 18, 18, 0.8);
            border: 1px solid var(--sag-card-border);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-secondary);
            font-size: 1.35rem;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
        }

        .social-link::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            border: 1px solid transparent;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            transform: translateY(-4px) scale(1.08);
            color: var(--text-primary);
        }

        .social-whatsapp:hover {
            box-shadow: 0 0 15px rgba(37, 211, 102, 0.35);
            border-color: #25d366;
            color: #25d366;
        }

        .social-facebook:hover {
            box-shadow: 0 0 15px rgba(24, 119, 242, 0.35);
            border-color: #1877f2;
            color: #1877f2;
        }

        .social-instagram:hover {
            box-shadow: 0 0 15px rgba(225, 48, 108, 0.35);
            border-color: #e1306c;
            color: #e1306c;
        }

        .social-web:hover {
            box-shadow: 0 0 15px rgba(132, 204, 22, 0.35);
            border-color: var(--sag-green);
            color: var(--sag-green);
        }

        .social-link:active {
            transform: scale(0.92);
        }

        /* Footer Info */
        footer {
            text-align: center;
            font-size: 0.74rem;
            color: var(--text-muted);
            padding: 16px 0 0;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            line-height: 1.5;
        }

        footer span {
            color: var(--text-secondary);
            font-weight: 500;
        }

        /* Toast Alert System */
        .toast {
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%) translateY(100px);
            background: rgba(132, 204, 22, 0.95);
            color: #050505;
            padding: 12px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 0.88rem;
            display: flex;
            align-items: center;
            gap: 8px;
            opacity: 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(132, 204, 22, 0.3);
            z-index: 1000;
            pointer-events: none;
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            white-space: nowrap;
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
        }

        .toast i {
            font-size: 1.1rem;
        }

        .toast.show {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
        }

        /* Intro Entrance Animations */
        @keyframes fadeSlideUp {
            from {
                opacity: 0;
                transform: translateY(24px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-up {
            animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
        }

        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.3s; }
        .delay-4 { animation-delay: 0.4s; }
        .delay-5 { animation-delay: 0.5s; }

        /* Media Queries for Small Devices */
        @media (max-width: 380px) {
            .container { padding: 0 12px 30px; }
            h1 { font-size: 1.8rem; }
            .logo-container { width: 96px; height: 96px; margin-top: -48px; }
            .form-row { grid-template-columns: 1fr; gap: 8px; }
        }
    </style>
</head>
<body>

    <!-- Glowing Background Elements -->
    <div class="bg-glow-1"></div>
    <div class="bg-glow-2"></div>

    <div class="container">
        
        <!-- Profile & Header Section -->
        <header class="profile-card animate-fade-up delay-1">
            <div class="cover-photo"></div>
            
            <div class="logo-container">
                <div class="logo-wrapper clickable" id="logoCard" onclick="handleLogoClick()">
                    <img class="logo-img" src="${logoBase64}" alt="Logo Comercializadora Sagitario">
                </div>
            </div>

            <div class="profile-info">
                <div class="role-badge">
                    <i class="ph ph-seal-check"></i> Ejecutiva de Cuenta
                </div>
                <h1>Susana Mayorga</h1>
                <div class="company-name">
                    <i class="ph ph-briefcase" style="color: var(--sag-green);"></i> Comercializadora Sagitario
                </div>

                <div class="bio-text">
                    <p>Materializamos tu identidad de marca. Especialistas en <strong>impresión de playeras</strong>, tazas y artículos publicitarios con precisión milimétrica. Innovación y calidad a tu alcance.</p>
                </div>
            </div>
        </header>

        <!-- CTA Primary Actions -->
        <section class="actions-group animate-fade-up delay-2">
            <a href="https://wa.me/529611885031?text=Hola%20Susana,%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20proyecto." target="_blank" class="btn btn-primary clickable" id="btnWhatsapp">
                <i class="ph ph-whatsapp-logo" style="font-size: 1.35rem;"></i>
                Cotizar por WhatsApp
            </a>

            <button onclick="saveContact()" class="btn btn-secondary clickable" type="button">
                <i class="ph ph-user-plus" style="font-size: 1.25rem;"></i>
                Guardar Contacto
            </button>
        </section>

        <!-- Services Grid Section -->
        <section class="animate-fade-up delay-3">
            <div class="section-header">
                <div class="section-title">
                    <i class="ph ph-grid-four"></i> Nuestros Servicios
                </div>
                <div class="section-subtitle">Toca para cotizar</div>
            </div>

            <div class="services-container">
                <div class="services-grid">
                    <!-- Playeras -->
                    <div class="service-card service-playeras clickable" onclick="selectService('playeras', this)">
                        <div class="service-card-content">
                            <i class="ph ph-t-shirt service-icon"></i>
                            <span class="service-title">Impresión de Playeras</span>
                        </div>
                    </div>

                    <!-- Tazas -->
                    <div class="service-card service-tazas clickable" onclick="selectService('tazas', this)">
                        <div class="service-card-content">
                            <i class="ph ph-mug-hot service-icon"></i>
                            <span class="service-title">Tazas Personalizadas</span>
                        </div>
                    </div>

                    <!-- Publicitarios -->
                    <div class="service-card service-publicitarios clickable" onclick="selectService('publicitarios', this)">
                        <div class="service-card-content">
                            <i class="ph ph-megaphone service-icon"></i>
                            <span class="service-title">Artículos Publicitarios</span>
                        </div>
                    </div>

                    <!-- Recuerdos -->
                    <div class="service-card service-recuerdos clickable" onclick="selectService('recuerdos', this)">
                        <div class="service-card-content">
                            <i class="ph ph-gift service-icon"></i>
                            <span class="service-title">Recuerdos & Eventos</span>
                        </div>
                    </div>
                </div>

                <!-- Premium Cards spanning 2 columns -->
                <div class="service-card service-digitales clickable" style="height: 100px; width: 100%;" onclick="selectService('digitales', this)">
                    <div class="service-card-content" style="flex-direction: row; align-items: center; justify-content: flex-start; gap: 16px;">
                        <i class="ph ph-device-mobile service-icon" style="font-size: 1.8rem; padding: 10px;"></i>
                        <div style="display: flex; flex-direction: column; text-align: left;">
                            <span class="service-title" style="margin-top: 0; font-size: 0.95rem;">Tarjetas Digitales Premium</span>
                            <span style="font-size: 0.76rem; color: var(--text-secondary);">Presentación inteligente e interactiva</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Values & Flyer Highlights Section -->
        <section class="animate-fade-up delay-4">
            <div class="section-header">
                <div class="section-title">
                    <i class="ph ph-shield-check"></i> Tu Garantía Sagitario
                </div>
            </div>

            <div class="highlights-list">
                <div class="highlight-item">
                    <div class="highlight-icon-wrapper">
                        <i class="ph ph-palette"></i>
                    </div>
                    <div class="highlight-content">
                        <span class="highlight-title">Diseños Personalizados</span>
                        <span class="highlight-desc">Desarrollos adaptados a la identidad de tu marca.</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <div class="highlight-icon-wrapper">
                        <i class="ph ph-timer"></i>
                    </div>
                    <div class="highlight-content">
                        <span class="highlight-title">Entrega Rápida</span>
                        <span class="highlight-desc">Respeto absoluto por los tiempos acordados.</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <div class="highlight-icon-wrapper">
                        <i class="ph ph-sparkles"></i>
                    </div>
                    <div class="highlight-content">
                        <span class="highlight-title">Impresión de Alta Calidad</span>
                        <span class="highlight-desc">Tecnología avanzada para colores y acabados vibrantes.</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <div class="highlight-icon-wrapper">
                        <i class="ph ph-stack"></i>
                    </div>
                    <div class="highlight-content">
                        <span class="highlight-title">Pedidos al por Mayor</span>
                        <span class="highlight-desc">Capacidad industrial y tarifas especiales por volumen.</span>
                    </div>
                </div>

                <div class="highlight-item">
                    <div class="highlight-icon-wrapper">
                        <i class="ph ph-crown"></i>
                    </div>
                    <div class="highlight-content">
                        <span class="highlight-title">Atención Premium</span>
                        <span class="highlight-desc">Asesoría directa y personalizada en todo momento.</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Interactive Quick Quote Builder Section -->
        <section class="animate-fade-up delay-4">
            <div class="section-header">
                <div class="section-title">
                    <i class="ph ph-calculator"></i> Cotizador Express
                </div>
                <div class="section-subtitle">Mensaje automático</div>
            </div>

            <div class="quote-form-card">
                <div class="form-group">
                    <label class="form-label" for="quoteService">Producto a Cotizar</label>
                    <select class="form-control" id="quoteService" onchange="syncServiceCard()">
                        <option value="general">Seleccionar servicio...</option>
                        <option value="playeras">Impresión de Playeras</option>
                        <option value="tazas">Tazas Personalizadas</option>
                        <option value="publicitarios">Artículos Publicitarios</option>
                        <option value="recuerdos">Recuerdos & Eventos</option>
                        <option value="digitales">Tarjetas Digitales Premium</option>
                    </select>
                </div>

                <div class="form-row">
                    <div class="form-group">
                        <label class="form-label" for="quoteName">Nombre</label>
                        <input type="text" class="form-control" id="quoteName" placeholder="Tu nombre...">
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="quoteQty">Cantidad</label>
                        <input type="number" class="form-control" id="quoteQty" placeholder="Ej. 50" min="1">
                    </div>
                </div>

                <div class="form-group">
                    <label class="form-label" for="quoteDetails">Detalles Especiales</label>
                    <textarea class="form-control" id="quoteDetails" rows="2" placeholder="Colores, medidas, logo..."></textarea>
                </div>

                <button onclick="sendExpressQuote()" class="btn btn-primary clickable" style="margin-top: 6px; width: 100%;">
                    <i class="ph ph-paper-plane-tilt"></i> Enviar a WhatsApp
                </button>
            </div>
        </section>

        <!-- Contact List Section -->
        <section class="contact-card animate-fade-up delay-5">
            <div class="contact-item clickable" onclick="openMaps(this)">
                <div class="contact-icon-wrapper">
                    <i class="ph ph-map-pin-line"></i>
                </div>
                <div class="contact-details">
                    <span class="contact-label">Ubicación física</span>
                    <span class="contact-value">Av Rosa del Norte M-12 Casa 4<br>Col. Infonavit El Rosario</span>
                    <span class="badge-info"><i class="ph ph-navigation-arrow"></i> Presiona para navegar</span>
                </div>
            </div>

            <div class="contact-item clickable" onclick="copyPhone(this)">
                <div class="contact-icon-wrapper">
                    <i class="ph ph-phone-call"></i>
                </div>
                <div class="contact-details">
                    <span class="contact-label">Teléfono Directo</span>
                    <span class="contact-value">961 188 5031</span>
                    <span class="badge-info" id="phoneBadge"><i class="ph ph-copy"></i> Toca para copiar número</span>
                </div>
            </div>
        </section>

        <!-- Social Media Grid -->
        <section class="animate-fade-up delay-5" style="text-align: center;">
            <div class="social-row">
                <a href="https://wa.me/529611885031" target="_blank" class="social-link social-whatsapp" title="WhatsApp">
                    <i class="ph ph-whatsapp-logo"></i>
                </a>
                <a href="https://facebook.com" target="_blank" class="social-link social-facebook" title="Facebook">
                    <i class="ph ph-facebook-logo"></i>
                </a>
                <a href="https://instagram.com" target="_blank" class="social-link social-instagram" title="Instagram">
                    <i class="ph ph-instagram-logo"></i>
                </a>
                <a href="https://comercializadorassagitario.com" target="_blank" class="social-link social-web" title="Sitio Web">
                    <i class="ph ph-globe"></i>
                </a>
            </div>
        </section>

        <!-- Premium Footer -->
        <footer class="animate-fade-up delay-5">
            <p>© 2026 <span>Comercializadora Sagitario</span>.</p>
            <p style="margin-top: 4px; font-size: 0.68rem; color: var(--text-muted);">Calidad que perdura · Tu imagen en manos expertas</p>
        </footer>
    </div>

    <!-- Notification Toast -->
    <div id="toast" class="toast">
        <i class="ph ph-check-circle"></i>
        <span id="toast-message">Acción completada</span>
    </div>

    <script>
        // Store selected service ID
        let selectedServiceId = 'general';

        // Add ripple and active animation feedback on click
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(".clickable").forEach(element => {
                element.addEventListener("click", function(e) {
                    // Click visual transition feedback
                    this.classList.add("active-click");
                    setTimeout(() => {
                        this.classList.remove("active-click");
                    }, 200);
                });
            });
        });

        // Trigger pulse/vibration on logo click
        function handleLogoClick() {
            const logo = document.getElementById('logoCard');
            showToast('¡Hola! Bienvenido a Comercializadora Sagitario');
            
            // Add momentary animation class
            logo.style.transform = 'scale(0.95)';
            setTimeout(() => {
                logo.style.transform = '';
            }, 150);
        }

        // Sync service card click to select box & state
        function selectService(serviceKey, cardElement) {
            // Remove active class from all service cards
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('active');
            });

            // Toggle logic
            if (selectedServiceId === serviceKey) {
                // If clicking the active one, unselect
                selectedServiceId = 'general';
                document.getElementById('quoteService').value = 'general';
                showToast('Servicio deseleccionado');
            } else {
                selectedServiceId = serviceKey;
                cardElement.classList.add('active');
                document.getElementById('quoteService').value = serviceKey;
                
                // Show personalized toast
                const titles = {
                    'playeras': 'Impresión de Playeras seleccionada',
                    'tazas': 'Tazas Personalizadas seleccionada',
                    'publicitarios': 'Artículos Publicitarios seleccionados',
                    'recuerdos': 'Recuerdos & Eventos seleccionados',
                    'digitales': 'Tarjetas Digitales seleccionada'
                };
                showToast(titles[serviceKey] || 'Servicio seleccionado');

                // Smooth scroll down to quotation form
                document.querySelector('.quote-form-card').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        // Sync dropdown change back to service card layout
        function syncServiceCard() {
            const dropdown = document.getElementById('quoteService');
            const selectedVal = dropdown.value;
            selectedServiceId = selectedVal;

            // Clear card active states
            document.querySelectorAll('.service-card').forEach(card => {
                card.classList.remove('active');
            });

            if (selectedVal !== 'general') {
                const targetCard = document.querySelector(\`.service-\${selectedVal}\`);
                if (targetCard) {
                    targetCard.classList.add('active');
                }
            }
        }

        // Generate customized WhatsApp Quote API link
        function sendExpressQuote() {
            const serviceMap = {
                'general': 'Impresiones Generales / Cotización',
                'playeras': 'Impresión de Playeras / Textiles',
                'tazas': 'Tazas Personalizadas',
                'publicitarios': 'Artículos Publicitarios y Merch',
                'recuerdos': 'Recuerdos y Souvenirs de Evento',
                'digitales': 'Tarjetas Digitales Premium / Identidad'
            };

            const serviceVal = document.getElementById('quoteService').value;
            const serviceName = serviceMap[serviceVal] || 'Impresión';
            const name = document.getElementById('quoteName').value.trim();
            const qty = document.getElementById('quoteQty').value.trim();
            const details = document.getElementById('quoteDetails').value.trim();

            if (!name) {
                showToast('Por favor, ingresa tu nombre');
                document.getElementById('quoteName').focus();
                return;
            }

            // Construct WhatsApp text message
            let message = \`Hola Susana! Mi nombre es \${name}. Me interesa cotizar:\n\`;
            message += \`*Producto:* \${serviceName}\n\`;
            if (qty) message += \`*Cantidad:* \${qty} pzs\n\`;
            if (details) message += \`*Detalles:* \${details}\n\`;
            message += \`\nVi tu Tarjeta Digital Premium Sagitario y me gustaría recibir asesoría.\`;

            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = \`https://wa.me/529611885031?text=\${encodedMessage}\`;

            showToast('Abriendo WhatsApp...');
            setTimeout(() => {
                window.open(whatsappUrl, '_blank');
            }, 800);
        }

        // Download vCard contact
        function saveContact() {
            const vCardData = \`BEGIN:VCARD
VERSION:3.0
FN:Susana Mayorga Flores
ORG:Comercializadora Sagitario
TITLE:Ejecutiva de Cuenta
TEL;TYPE=CELL:+529611885031
ADR;TYPE=WORK:;;Av Rosa del Norte M-12 Casa 4 Col. Infonavit El Rosario;;;Mexico;
URL:https://comercializadorassagitario.com
END:VCARD\`;

            const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.setAttribute('download', 'Susana_Mayorga_Sagitario.vcf');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);

            showToast('Contacto descargado');
        }

        // Copy phone to clipboard with custom feedback
        function copyPhone(element) {
            const phoneNum = '9611885031';
            
            // Add temporary active class to element
            if (element) {
                element.classList.add('active');
                setTimeout(() => element.classList.remove('active'), 1500);
            }

            navigator.clipboard.writeText(phoneNum).then(() => {
                showToast('Número copiado al portapapeles');
                const badge = document.getElementById('phoneBadge');
                if (badge) {
                    badge.innerHTML = '<i class="ph ph-check"></i> ¡Copiado con éxito!';
                    badge.style.color = '#ffffff';
                    badge.style.background = 'rgba(255,255,255,0.2)';
                    setTimeout(() => {
                        badge.innerHTML = '<i class="ph ph-copy"></i> Toca para copiar número';
                        badge.style.color = 'var(--sag-green)';
                        badge.style.background = 'rgba(132, 204, 22, 0.08)';
                    }, 3000);
                }
            }).catch(() => {
                // Fallback to calling
                window.location.href = 'tel:+529611885031';
            });
        }

        // Open location in Google Maps
        function openMaps(element) {
            if (element) {
                element.classList.add('active');
                setTimeout(() => element.classList.remove('active'), 1500);
            }
            showToast('Abriendo ubicación en Google Maps...');
            setTimeout(() => {
                window.open('https://www.google.com/maps/search/?api=1&query=Av+Rosa+del+Norte+M-12+Casa+4+Col.+Infonavit+El+Rosario', '_blank');
            }, 800);
        }

        // Custom Toast Alert System
        function showToast(message) {
            const toast = document.getElementById('toast');
            const toastMsg = document.getElementById('toast-message');
            
            toastMsg.textContent = message;
            toast.classList.add('show');
            
            // Auto hide
            setTimeout(() => {
                toast.classList.remove('show');
            }, 2600);
        }
    </script>
</body>
</html>`;

fs.writeFileSync(outputPath, htmlContent, 'utf8');
console.log("✅ Premium HTML file created successfully at:", outputPath);
console.log("File size: " + Math.round(htmlContent.length / 1024) + " KB");
