# sora

Кинематографичная генерация видео по сценарию.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Дрон пролетает над ночным мегаполисом",
  "bot": "sora",
  "user": "user_123",
  "images": [
    "https://example.com/city.jpg"
  ],
  "params": {
    "duration": 10,
    "aspect_ratio": "16:9"
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
- `bot` (string, required) — идентификатор модели (`sora`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 1 изображения.
- `params.duration` (number, optional) — по умолчанию `10`.
- `params.aspect_ratio` (string, optional) — только `16:9` или `9:16`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
