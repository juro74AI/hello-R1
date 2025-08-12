# Configuration Reverse Proxy HTTPS

Ce projet inclut une configuration Nginx pour servir votre application Vite derrière un reverse proxy HTTPS.

## Configuration rapide

### 1. Générer les certificats SSL (développement)
```bash
chmod +x setup-ssl.sh
./setup-ssl.sh
```

### 2. Démarrer avec Docker Compose
```bash
docker-compose up -d
```

### 3. Accéder à l'application
- HTTP: http://magic.red-ark.com (redirige vers HTTPS)
- HTTPS: https://magic.red-ark.com

## Configuration pour la production

### Avec Let's Encrypt (recommandé)
```bash
# Installer Certbot
sudo apt install certbot python3-certbot-nginx

# Obtenir un certificat SSL
sudo certbot --nginx -d magic.red-ark.com

# Le certificat sera automatiquement renouvelé
```

### Configuration manuelle Nginx
```bash
# Copier la configuration
sudo cp nginx.conf /etc/nginx/sites-available/magic.red-ark.com
sudo ln -s /etc/nginx/sites-available/magic.red-ark.com /etc/nginx/sites-enabled/

# Tester la configuration
sudo nginx -t

# Redémarrer Nginx
sudo systemctl restart nginx
```

## Fonctionnalités incluses

- ✅ Redirection HTTP vers HTTPS
- ✅ Configuration SSL sécurisée (TLS 1.2/1.3)
- ✅ Headers de sécurité (HSTS, X-Frame-Options, etc.)
- ✅ Support Hot Module Replacement (HMR) de Vite
- ✅ Proxy WebSocket pour le développement
- ✅ Cache optimisé pour les assets statiques
- ✅ Configuration Docker prête à l'emploi

## Ports utilisés

- **80**: HTTP (redirige vers HTTPS)
- **443**: HTTPS (Nginx)
- **5173**: Vite dev server (interne)

## Sécurité

La configuration inclut:
- Chiffrement TLS moderne
- Headers de sécurité recommandés
- Protection contre les attaques courantes
- Cache sécurisé pour les performances