# ✨ FAQs with Multi-Language Translation - BharatFD Assignment ✨

This backend service provides a **multilingual FAQ API** using **Node.js, Express, MongoDB, and Redis**. It supports **dynamic translations** using **Google Translate API** and caches results for **improved performance**. 🚀

## 📌 **Features**
✅ **Multilingual Support**: Fetch FAQs in multiple languages 🌏
✅ **Redis Caching**: Stores FAQs for faster performance ⚡
✅ **WYSIWYG Editor**: Supports rich-text formatted answers 📝
✅ **Google Translate Integration**: Automatically translates FAQs 🌐
✅ **RESTful API**: Simple and easy-to-use FAQ management 🔥

---
## 🛠 **Technologies Used**
- **Node.js** 🟢 - Backend framework
- **Express.js** 🚀 - API request handling
- **MongoDB** 🍃 - Database for storing FAQs
- **Redis** 🔴 - Caching translated FAQs
- **Google Translate API** 🌍 - Multilingual translations
- **Jest & Supertest** ✅ - API Testing
- **dotenv** 🔑 - Environment variable management
- **ioredis** ⚡ - Redis integration

---
## 📝 **Prerequisites**
🔹 **Node.js** installed 🖥️
🔹 **MongoDB** running locally or remotely 🍃
🔹 **Redis** running locally or remotely 🔴
🔹 **Google Translate API Key** (optional for auto-translation) 🌍

---
## ⚙️ **Installation**
### 1️⃣ Clone the repository:
```sh
git clone https://github.com/yourusername/faq-api.git
cd faq-api
```
### 2️⃣ Install dependencies:
```sh
npm install
```
### 3️⃣ Configure environment variables:
Create a **.env** file at the project root and add:
```ini
MONGO_URI=mongodb://localhost:27017/faqdb
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
GOOGLE_API_KEY=your-google-api-key (optional)
```
### 4️⃣ Start the application:
```sh
npm run dev
```
🔹 The server will start at **http://localhost:8000**

---
## 🔥 **API Endpoints**

### 📍 1. Fetch All FAQs
- **URL:** `/api/faqs/`
- **Method:** `GET`
- **Query Parameters:**
  - `lang`: Language code (`en`, `hi`, `bn`, etc.). Defaults to `en`.
- **Example Request:**
  ```sh
  curl http://localhost:8000/api/faqs/?lang=hi
  ```
- **Example Response:**
  ```json
  [
    { "question": "What is Node.js?", "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine." },
    { "question": "What is Redis?", "answer": "Redis is an in-memory data structure store, used as a database, cache, and message broker." }
  ]
  ```

### 📍 2. Create a New FAQ
- **URL:** `/api/faqs/`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    "question_hi": "Node.js क्या है?",
    "question_bn": "Node.js কी?"
  }
  ```
- **Example Response:**
  ```json
  { "message": "FAQ created successfully" }
  ```

### 📍 3. Update an FAQ
- **URL:** `/api/faqs/:id`
- **Method:** `PUT`
- **Request Body:**
  ```json
  { "question": "Updated FAQ question", "answer": "Updated FAQ answer" }
  ```
- **Example Response:**
  ```json
  { "message": "FAQ updated successfully" }
  ```

### 📍 4. Delete an FAQ
- **URL:** `/api/faqs/:id`
- **Method:** `DELETE`
- **Example Response:**
  ```json
  { "message": "FAQ deleted successfully" }
  ```

---
## ⚡ **Caching Mechanism**
- Uses **Redis** 🔴 to store translated FAQs for **1 hour** ⏳
- Each language's FAQs are cached with a **unique Redis key** (`faqs:<lang>`)
- Improves response **speed** and **reduces DB queries** 🚀

---
## 🌐 **Multi-language Translation**
- Automatically translates questions into multiple languages (Hindi, Bengali, etc.) using **Google Translate API** 🌍
- Falls back to English if translation **fails** 🛑

---
## 🧪 **Testing**
To test the API, use **Jest** & **Supertest** ✅
### 1️⃣ Install testing dependencies:
```sh
npm install --save-dev jest supertest
```
### 2️⃣ Run the tests:
```sh
npm test
```

---
## 🐳 **Docker Support (Optional)**
Run the app in a **Docker container** 🚢
### 1️⃣ Create a **Dockerfile**:
```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
EXPOSE 8000
```
### 2️⃣ Create a **docker-compose.yml** file:
```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - 8000:8000
    environment:
      - MONGO_URI=mongodb://mongo:27017/faqdb
      - REDIS_HOST=redis
      - REDIS_PORT=6379
  mongo:
    image: mongo:latest
    ports:
      - 27017:27017
  redis:
    image: redis:latest
    ports:
      - 6379:6379
```
### 3️⃣ Build & run the container:
```sh
docker-compose up --build
```

---
## 🤝 **Contribution**
1️⃣ Fork the repository 🍴
2️⃣ Create a feature branch:
```sh
git checkout -b feature-branch
```
3️⃣ Commit your changes:
```sh
git commit -m "feat: add new feature"
```
4️⃣ Push to your branch:
```sh
git push origin feature-branch
```
5️⃣ Open a pull request 🔃

---
## 📜 **License**
🔹 This project is licensed under the **MIT License** ⚖️ - see the `LICENSE` file for details.

---
🔥 **Made for BharatFD Assignment** 🔥


