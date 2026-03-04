# gpt_image

Генерация и редактирование изображений по текстовому запросу.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Фотореалистичный интерьер кофейни в сканди-стиле",
  "bot": "gpt_image",
  "user": "user_123",
  "images": [
    "https://example.com/reference.jpg"
  ],
  "params": {
    "quality": "high",
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

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`gpt_image`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.quality` (string, optional) — по умолчанию `high`.
- `params.aspect_ratio` (string, optional) — по умолчанию `auto`, может извлекаться из `prompt` (например, `--ar 16:9`).
- `params.resolution` — удаляется при нормализации и не используется моделью.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
