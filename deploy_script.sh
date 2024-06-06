echo "Pulling ac-admin-dashboard..."
cd ~/code/ac-admin-dashboard/ && git pull origin main

echo "Pulling server-configuration..."
cd ~/code/ac-server-configuration/ && git pull origin main

echo "Deploying admin_dashboard_service..."
docker compose up admin_dashboard_service --build -d