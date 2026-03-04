# flux_2_pro

Профессиональная генерация с балансом качества и скорости.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Концепт футуристического электромобиля",
  "bot": "flux_2_pro",
  "user": "user_123",
  "params": {
    "resolution": "2k",
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
- `bot` (string, required) — идентификатор модели (`flux_2_pro`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.resolution` (string, optional) — по умолчанию `2k` (в `freeAiChat` принудительно `1k`).
- `params.aspect_ratio` (string, optional) — по умолчанию `auto`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
