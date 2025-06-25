# Green API Demo

Тестовый проект для работы с методами Green API.

Интерфейс позволяет вызывать `getSettings`, `getStateInstance`, `sendMessage`, `sendFileByUrl` в соответствии с заданием.

## Стек

- React (Create React App)
- Axios для запросов
- Express (Node.js) на бэкенде
- Деплой: Vercel (frontend), Render (backend)

## Что реализовано

- Подключение по `idInstance` и `apiTokenInstance`
- Отправка сообщений в WhatsApp
- Отправка файлов по URL
- Получение статуса инстанса и настроек
- Разделены поля `chatId` для sendMessage и sendFile (как в макете)
- Стилизовано вручную, без UI-библиотек

## Как запустить

### Backend:

```bash
cd green-api
npm install
node index.js
```

По умолчанию доступен на: `http://localhost:5000/api`

### Frontend:

```bash
cd frontend
npm install
npm start
```

Откроется на `http://localhost:3000`

> Для связи с backend используется `.env` файл с переменной `REACT_APP_API_BASE_URL`

---

## Структура проекта

```
green-api/
├── frontend/ (React)
│   └── src/
│       ├── App.js
│       └── App.css
├── index.js (Express)
├── routes/api.js
└── .env
```

---

## Автор

Даулет Ермуханов  
Telegram: [@devletin](https://t.me/devletin)

---

## Примечания

- Всё работает и проверено
- Интерфейс собран вручную по макету из задания
- Видео прилагаю отдельно
