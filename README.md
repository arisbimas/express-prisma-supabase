# Express + Prisma + Supabase Starter

Starter project ini menggunakan Express.js sebagai framework web, Prisma sebagai ORM, dan Supabase (PostgreSQL) sebagai database.

## Prasyarat

- Node.js terinstall
- Akun Supabase dan URL database

## Cara Menggunakan

1.  **Install Dependencies**

    ```bash
    npm install
    ```

2.  **Setup Environment Variables**

    Buat file `.env` berdasarkan `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Isi `DATABASE_URL` di file `.env` dengan connection string dari Supabase Anda.
    Format: `postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres`

    > **Penting:** Pastikan Anda menggunakan connection string untuk **Transaction Mode** (port 6543) atau **Session Mode** (port 5432) sesuai kebutuhan. Untuk serverless environment, disarankan menggunakan connection pooling (Transaction Mode).

3.  **Sinkronisasi Database**

    Jalankan perintah berikut untuk membuat tabel di database Supabase Anda berdasarkan `prisma/schema.prisma`:

    ```bash
    npx prisma db push
    ```

    Atau jika ingin membuat migration file:

    ```bash
    npx prisma migrate dev --name init
    ```

4.  **Jalankan Aplikasi**

    Mode Development (dengan nodemon):

    ```bash
    npm run dev
    ```

    Mode Production:

    ```bash
    npm start
    ```

## Struktur Project

- `src/app.js`: Setup Express app
- `src/server.js`: Entry point server
- `src/controllers`: Logika bisnis
- `src/routes`: Definisi routing
- `src/utils/prisma.js`: Instance Prisma Client
- `prisma/schema.prisma`: Definisi skema database

## API Endpoints Contoh

- `POST /api/users`: Membuat user baru
- `GET /api/users`: Mengambil semua user
- `GET /api/users/:id`: Mengambil user berdasarkan ID
