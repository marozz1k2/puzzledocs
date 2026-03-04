# seedream

Генерация фото-контента с мягкой художественной обработкой.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "seedream",
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

- `prompt` (string, required) — описание изображения.
- `bot` (string, required) — идентификатор модели (`seedream`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — `2k` или `3k`, по умолчанию `2k`.
- `params.aspect_ratio` (string, optional) — только `1:1`, `16:9`, `9:16`, `4:5`, `5:4`, `3:2`, `2:3`; по умолчанию `1:1`.
- `params.seed` (integer, optional) — только целое число `>= 0`, иначе удаляется.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
