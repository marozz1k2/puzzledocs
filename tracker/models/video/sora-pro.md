# sora_pro

Профессиональная версия Sora для сложных роликов.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "sora_pro",
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
- `bot` (string, required) — идентификатор модели (`sora_pro`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — до 1 изображения.
- `params.duration` (number, optional) — по умолчанию `25`.
- `params.aspect_ratio` (string, optional) — только `16:9` или `9:16`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
