# Portfolio Deployment Guide

Follow these steps to host your portfolio publicly for free on Vercel.

## Phase 1: Initialize Git and Push to GitHub

1.  **Initialize Git**:
    Open your terminal in the `d:\NOTES\Portfolio` directory and run:
    ```powershell
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a Repository on GitHub**:
    - Go to [github.com](https://github.com) and log in.
    - Click the **+** icon in the top right and select **New repository**.
    - name it `my-portfolio` (or any name you like).
    - Keep it **Public** and do **not** initialize with README/LICENSE.
    - Click **Create repository**.

3.  **Push your code**:
    Run the following commands in your terminal (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):
    ```powershell
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git branch -M main
    git push -u origin main
    ```

## Phase 2: Deploy to Vercel

1.  **Sign up/Log in to Vercel**:
    - Go to [vercel.com](https://vercel.com) and sign up using your GitHub account.

2.  **Import your project**:
    - Click **Add New...** -> **Project**.
    - Find your repository and click **Import**.

3.  **Configure and Deploy**:
    - Vercel will automatically detect that you're using **Vite**.
    - You don't need to change any settings.
    - Click **Deploy**.

4.  **Success!**:
    - Once finished, you'll get a URL like `my-portfolio.vercel.app`. Your site is now live!

## Why Vercel?
- **Automatic Deploys**: Every time you push changes to GitHub, Vercel will automatically update your live site.
- **Fast Performance**: Vercel is optimized for frontend frameworks like React and Vite.
- **Free Forever**: The personal plan allows you to host your portfolio for free indefinitely.
