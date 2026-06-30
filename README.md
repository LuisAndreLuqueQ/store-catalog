# FakeStore API Catalog — LUXE.

## Descripción

Aplicación web de catálogo de productos construida con React, consumiendo la API pública [FakeStoreAPI](https://fakestoreapi.com). Permite explorar productos, buscar en tiempo real, filtrar por categoría y ver el detalle de cada producto.

## Despliegue

> URL disponible próximamente

## Repositorio

[https://github.com/LuisAndreLuqueQ/store-catalog](https://github.com/LuisAndreLuqueQ/store-catalog)

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/LuisAndreLuqueQ/store-catalog.git

# 2. Entrar al directorio
cd store-catalog

# 3. Instalar dependencias
pnpm install

# 4. Iniciar el servidor de desarrollo
pnpm run dev
```

## Características

- Listado de productos en grid responsivo (2 columnas mobile / 4 columnas desktop)
- Búsqueda en tiempo real desde el Navbar
- Filtro por categorías (Electronics, Jewelry, Men's, Women's)
- Ordenamiento por precio (menor a mayor / mayor a menor)
- Paginación con botón "Load More"
- Página de detalle de producto con imagen, descripción y rating
- Hero banner con imagen responsiva
- Navbar sticky con menú hamburger en mobile
- Página 404 personalizada
- Manejo de estados: loading spinner y mensaje de error

## Tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Librería principal de UI |
| Vite 8 | Bundler y servidor de desarrollo |
| React Router DOM v7 | Navegación entre páginas |
| Tailwind CSS v4 | Estilos y diseño responsivo |
| Lucide React | Íconos SVG |
| FakeStore API | Fuente de datos de productos |

## Autor

**Luis Luque** — [GitHub](https://github.com/LuisAndreLuqueQ)
