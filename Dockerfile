FROM node:18-alpine

# Installer pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer les dépendances
RUN pnpm install --frozen-lockfile

# Copier le code source
COPY . .

# Exposer le port
EXPOSE 5173

# Commande par défaut
CMD ["pnpm", "run", "dev", "--host", "0.0.0.0"]