# -FAQs-with-multi-language-translation
This backend service provides a multilingual FAQ API using Node.js, Express, MongoDB, and Redis. It supports dynamic translations using Google Translate API and caches results for improved performance. 

A REST API for managing Frequently Asked Questions (FAQs) with multilingual support and caching. This API allows fetching FAQs in various languages and stores translated data dynamically in a cache (Redis).

## Features

- **Multilingual Support**: Fetch FAQs in multiple languages.
- **Redis Caching**: Caches FAQs for improved performance.
- **WYSIWYG Editor**: Supports rich-text formatted answers.
- **Google Translate Integration**: Translates questions into different languages during FAQ creation.
- **RESTful API**: Simple and easy-to-use API for managing FAQs.

## Technologies Used

- **Node.js** for backend development
- **Express.js** for handling requests
- **MongoDB** for storing FAQ data
- **Redis** for caching translations
- **Google Translate API** (or `googletrans` library) for multilingual translation
- **Jest & Supertest** for testing the API
- **dotenv** for environment variable management
- **ioredis** for Redis integration

## Prerequisites

- **Node.js** installed
- **MongoDB** running locally or remotely
- **Redis** running locally or remotely
- **Google Translate API Key** (optional for automatic translations)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/faq-api.git
   cd faq-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**
   
   Create a `.env` file at the root of the project and add the following environment variables:

   ```plaintext
   MONGO_URI=mongodb://localhost:27017/faqdb
   REDIS_HOST=127.0.0.1
   REDIS_PORT=6379
   GOOGLE_API_KEY=your-google-api-key (optional)
   ```

4. **Start the application:**

   ```bash
   npm run dev
   ```

   This will start the server on `http://localhost:8000`.

## API Endpoints

### 1. Fetch All FAQs

**URL**: `/api/faqs/`

**Method**: `GET`

**Query Parameters**:
- `lang`: The language code (e.g., `en`, `hi`, `bn`). Defaults to `en`.

**Example Request**:
```bash
curl http://localhost:8000/api/faqs/?lang=hi
```

**Example Response**:
```json
[
  {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
  },
  {
    "question": "What is Redis?",
    "answer": "Redis is an in-memory data structure store, used as a database, cache, and message broker."
  }
]
```

### 2. Create a New FAQ

**URL**: `/api/faqs/`

**Method**: `POST`

**Request Body**:
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
  "question_hi": "Node.js क्या है?",
  "question_bn": "Node.js কী?"
}
```

**Example Response**:
```json
{
  "message": "FAQ created successfully",
  "faq": {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
  }
}
```

### 3. Update an FAQ

**URL**: `/api/faqs/:id`

**Method**: `PUT`

**Request Body**:
```json
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
  "question_hi": "Node.js क्या है?"
}
```

**Example Response**:
```json
{
  "message": "FAQ updated successfully"
}
```

### 4. Delete an FAQ

**URL**: `/api/faqs/:id`

**Method**: `DELETE`

**Example Response**:
```json
{
  "message": "FAQ deleted successfully"
}
```

## Caching Mechanism

- **Redis** is used to cache the FAQs for a particular language.
- Each language's FAQs are cached with a key in Redis (`faqs:<lang>`).
- Cache expiration is set to 1 hour to keep the data fresh.

## Multi-language Translation

The API supports automatic translation for FAQs during creation using Google Translate API or `googletrans` library. When creating a new FAQ, the question is translated into multiple languages, such as Hindi and Bengali. If translation fails, it falls back to English.

## Testing

To test the application, we use **Jest** and **Supertest** for unit and API testing.

1. Install the testing dependencies:
   ```bash
   npm install --save-dev jest supertest
   ```

2. Run the tests:
   ```bash
   npm test
   ```

## Docker Support (Optional)

If you want to run the application in a Docker container, follow these steps:

1. **Create a Dockerfile:**

   ```Dockerfile
   FROM node:18
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   CMD ["npm", "run", "dev"]
   EXPOSE 8000
   ```

2. **Create a `docker-compose.yml` file:**

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

3. **Build and run the Docker container:**

   ```bash
   docker-compose up --build
   ```

## Contribution

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "feat: add feature"`).
4. Push to your branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

