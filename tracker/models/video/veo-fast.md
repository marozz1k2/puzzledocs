# veo_fast

Ускоренная генерация видео для быстрых проверок идеи.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Короткий тизер мероприятия",
  "bot": "veo_fast",
  "user": "user_123",
  "images": [
    "https://example.com/event1.jpg"
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
- `bot` (string, required) — идентификатор модели (`veo_fast`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 2 изображений.
- `params.resolution` (string, optional) — по умолчанию `1080p`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
