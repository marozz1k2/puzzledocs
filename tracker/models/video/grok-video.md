# grok_video

Видео-модель для динамичных коротких клипов.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Спортивный автомобиль на горном серпантине",
  "bot": "grok_video",
  "user": "user_123",
  "images": [
    "https://example.com/car.jpg"
  ],
  "params": {
    "duration": 6
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
- `bot` (string, required) — идентификатор модели (`grok_video`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 1 изображения.
- `params.duration` (number, optional) — по умолчанию `6`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
