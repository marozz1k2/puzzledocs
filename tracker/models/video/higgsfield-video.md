# higgsfield_video

Генерация видео со стилизацией и визуальными эффектами.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "higgsfield_video",
  "user": "user_123"
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
- `bot` (string, required) — идентификатор модели (`higgsfield_video`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 2 изображений.
- `params.duration` (number, optional) — по умолчанию `5`.
- `params.sound` (boolean, optional) — по умолчанию `false`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
