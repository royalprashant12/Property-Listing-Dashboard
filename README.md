# 🏠 Mini Property Listing Dashboard

A simple React + Vite + Tailwind CSS project that displays property listings, allows filtering, viewing details in a modal, and adding new properties.  
Backend powered by **json-server** to simulate API endpoints.

---

## 📸 Screenshots

### Dashboard View
![Dashboard](https://github.com/royalprashant12/Property-Listing-Dashboard/blob/main/screenshots/dashboard.png)

### Property Card
![Property Card](https://github.com/royalprashant12/Property-Listing-Dashboard/blob/main/screenshots/card.png)

---

## 🚀 Features

- Fetch property data from a mock API (`json-server`)
- Display properties in responsive card layout
- Filter by property type
- Search by name or location
- Add a new property with form (Name, Type, Price, Location, Description, Image URL)
- View property details in a modal with image

---

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: json-server (mock REST API)

---

## ⚡ Setup Instructions

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/property-dashboard.git
cd property-dashboard
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Setup Tailwind

Ensure your `index.css` contains:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4️⃣ Run json-server (Backend)

```bash
npx json-server --watch db.json --port 5000
```

Endpoints:

- `GET /api/properties` → fetch all properties
- `POST /api/properties` → add new property

### 5️⃣ Run Frontend

```bash
npm run dev
```

---

## 📸 Screenshot

![Dashboard Preview](screenshot.png)

---

## 🙌 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss.

---

## 📬 Contact

- **Author**: Prashant Kumar
- **LinkedIn**: [prashantroyal12](https://www.linkedin.com/in/prashantroyal12/)
