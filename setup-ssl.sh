#!/bin/bash

# Script pour générer des certificats SSL auto-signés (développement uniquement)
# Pour la production, utilisez Let's Encrypt ou des certificats valides

mkdir -p ssl

# Générer une clé privée
openssl genrsa -out ssl/private.key 2048

# Générer un certificat auto-signé
openssl req -new -x509 -key ssl/private.key -out ssl/certificate.crt -days 365 -subj "/C=FR/ST=France/L=Paris/O=Dev/CN=magic.red-ark.com"

echo "Certificats SSL générés dans le dossier ssl/"
echo "ATTENTION: Ces certificats sont auto-signés et ne doivent être utilisés qu'en développement"
echo ""
echo "Pour la production, utilisez Let's Encrypt:"
echo "sudo certbot --nginx -d magic.red-ark.com"