# Ubuntu Deployment Guide for EduForge

This guide will walk you through the process of spinning up a fresh Ubuntu server (e.g., on AWS, DigitalOcean, or Linode) and deploying your full EduForge platform using Docker.

---

## 1. Create your Ubuntu Instance

1. Log into your cloud provider (AWS EC2, DigitalOcean Droplets, etc.).
2. Create a new instance and select **Ubuntu 24.04 LTS** (or 22.04 LTS) as the operating system.
3. Choose your instance size (1GB RAM is the absolute minimum, 2GB+ is highly recommended).
4. Add your SSH key for secure access.
5. In your provider's networking/firewall settings, ensure you **open ports 80 (HTTP) and 5000 (Backend API)** to the public.

---

## 2. Connect to your Server

Open your terminal and SSH into your newly created server using its public IP address:

```bash
ssh root@YOUR_SERVER_PUBLIC_IP
```

If you created a non-root user (e.g., `ubuntu` on AWS EC2), connect using `ssh ubuntu@YOUR_SERVER_PUBLIC_IP`.

---

## 3. Install Docker & Docker Compose

Run the following commands sequentially to update your server and install Docker:

```bash
# Update package index
sudo apt update && sudo apt upgrade -y

# Install prerequisite packages
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# Add Docker's official GPG key
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

# Add the Docker repository
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"

# Install Docker
sudo apt update
sudo apt install docker-ce docker-compose-plugin -y

# (Optional) Allow running docker without 'sudo'
sudo usermod -aG docker ${USER}
```
*(If you added yourself to the docker group, you may need to log out and log back into your SSH session).*

---

## 4. Get Your Code on the Server

You have two main options to get your code onto the server:

### Option A: Clone via Git (Recommended)
1. Push your local EduForge code to a GitHub/GitLab repository.
2. On your server, run:
```bash
git clone https://github.com/your-username/EduForge.git
cd EduForge
```

### Option B: Copy via SCP
From your **local machine's terminal**, copy the project directly to your server:
```bash
scp -r "d:\Sunil\Softwer\MERN Stack\Projects\EduForge" root@YOUR_SERVER_PUBLIC_IP:~/EduForge
```
Then on the server: `cd ~/EduForge`

---

## 5. Add Environment Variables (If Applicable)

If your backend or frontend requires secret API keys (like Firebase Admin keys or MongoDB URIs) that you do not want in your public source code, create a `.env` file on the server:

```bash
nano .env
```
Paste your secrets, then save and exit (`CTRL+O`, `Enter`, `CTRL+X`).

Make sure your Firebase Console settings (Authentication & Firestore Rules) are correctly configured as discussed previously, as your production app will connect to that exact database!

---

## 6. Build and Deploy!

You are now ready to launch the entire platform. Inside the `EduForge` folder on your server, run:

```bash
# Build the containers and start them in the background (-d)
sudo docker compose up --build -d
```

### Verifying the Deployment
- Check the status of your containers:
  ```bash
  sudo docker compose ps
  ```
- View the live logs to ensure the backend started correctly:
  ```bash
  sudo docker compose logs -f
  ```

---

## 7. Access Your App

Once the deployment finishes:
- Open your browser and go to `http://YOUR_SERVER_PUBLIC_IP`
- You will see the EduForge platform running beautifully! 

For production, it is highly recommended to eventually set up an SSL certificate (HTTPS) using **Nginx Proxy Manager** or **Certbot/Let's Encrypt** so that user passwords and Firebase auth tokens are securely transmitted.
