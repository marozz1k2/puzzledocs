# nano_banana

Лёгкая фото-модель для быстрых визуальных черновиков.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Набор параметров (no-code)

```json
{
  "bot": "nano_banana",
  "token": "[Ваш API-токен]",
  "user": "{{USER_ID_TEXT}}",
  "model": "nano_banana",
  "prompt": "{{prompt}}",
  "role": "[текст роли]",
  "business_operator": "{{BUSINESS_OPERATOR_USER_ID_TEXT}}",
  "business_connection": "{{BUSINESS_CONNECTION_ID}}",
  "images": [
    "https://example.com/reference.jpg"
  ],
  "params": {
    "resolution": "2k",
    "aspect_ratio": "1:1"
  }
}
```

### Пример ответа

```json
{
  "answer": "Ссылка на готовое изображение."
}
```

## Параметры

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`nano_banana`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — по умолчанию `2k`.
- `params.aspect_ratio` (string, optional) — сохраняется только для валидных значений (`1:1`, `16:9`, `9:16`, `4:5`, `5:4`, `3:2`, `2:3`, `4:3`, `21:9` и др. из общего списка); `auto` и невалидные значения удаляются.

## Параметры запроса

- `bot` — имя бота/модели в Puzzle AI (например, `gpt_5`, `sora`, `gpt_image`).
- `token` — API-токен вашего бота для входящих запросов.
- `user` — ID пользователя, который написал сообщение.
- `model` — ключ нейросети, которую нужно вызвать.
- `prompt` — текст задачи для нейросети.
- `role` — дополнительная инструкция по стилю ответа (необязательно).
- `business_operator` — ID оператора бизнес-аккаунта (для бизнес-ответов).
- `business_connection` — ID соединения бизнес-аккаунта.
- `params` — объект дополнительных настроек конкретной модели (если поддерживается).
- `images` / `video_url` — входные медиа для image/video-сценариев.
- `send_answer` — отправлять результат в чат (`true` по умолчанию).
- `error_command` — команда, которая вызывается при ошибке.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
