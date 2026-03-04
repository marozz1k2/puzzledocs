# veo

Видео-генерация из текста для универсальных сценариев.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Презентационный ролик о новом приложении",
  "bot": "veo",
  "user": "user_123",
  "images": [
    "https://example.com/screen1.jpg",
    "https://example.com/screen2.jpg"
  ],
  "params": {
    "resolution": "1080p"
  }
}
```

### Пример ответа

```json
{
  "ok": true,
  "result": "Готово"
}
```

## Параметры

- `prompt` (string, required) — описание видео.
- `bot` (string, required) — идентификатор модели (`veo`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 2 изображений.
- `params.resolution` (string, optional) — по умолчанию `1080p`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
