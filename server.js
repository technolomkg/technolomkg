const express = require('express');
const path = require('path');
const app = express();

// Указываем порт, который предоставляется Render или используем 4000 по умолчанию
const port = process.env.PORT || 4000;

// Указываем папку для статических файлов (папка build вашего React приложения)
app.use(express.static(path.join(__dirname, 'build')));

// Маршрут для главной страницы (в случае React SPA перенаправляем на index.html)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});