# Express + MongoDB Project

## Описание проекта

Это проект на Node.js, использующий Express для создания маршрутов и MongoDB для хранения данных. Он включает несколько маршрутов, отображающих страницы с информацией и изображениями, связанными с персонажем "Re-L" из аниме Ergo Proxy.

## Установка

### Предварительные требования

Перед установкой убедитесь, что на вашем компьютере установлены следующие компоненты:

- [Node.js](https://nodejs.org/en/download/) (версия 14.x или выше)
- [MongoDB](https://www.mongodb.com/try/download/community) (локально или через облачный сервис)

### Шаги установки

1. Склонируйте репозиторий:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите MongoDB сервер:
   - **Для Windows**:
     ```bash
     net start MongoDB
     ```
   - **Для macOS** (если используется Homebrew):
     ```bash
     brew services start mongodb-community
     ```

4. Запустите приложение:
   ```bash
   npm start
   ```

5. Откройте в браузере:
   ```
   http://localhost:3000
   ```

## Использование

Приложение предоставляет следующие маршруты:

- **`/`** - Главная страница
- **`/real_version1`** - Страница с версией персонажа "Re-L-ребенок"
- **`/real_version2`** - Страница с версией персонажа "Re-L-оригинал"
- **`/real_version3`** - Страница с версией персонажа "Real-клон"

## Примеры кода

### Фрагмент кода из `index.js`

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/real_version1', function(req, res, next) {
  res.render('real', {
    title: "Re-L-ребенок",
    picture: "images/Real-child.jpg",
    desc: "Ри-Л Мэйер — одна из главных героинь Ergo Proxy. Будучи следователем Бюро разведки в Ромдо, она подвергается нападению двух монстров и оказывается втянута в тайну Прокси. В конце концов она присоединяется к Винсенту Лоу и Пино в их поисках ответов."
  });
});
```
