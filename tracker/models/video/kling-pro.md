# kling_pro

Продвинутая видео-модель для детального контроля результата.

## Спецификация

- Endpoint: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Формат: `application/json`

### Пример запроса (no-code)

```json
{
  "prompt": "Кратко выполни задачу по инструкции",
  "bot": "kling_pro",
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
- `bot` (string, required) — идентификатор модели (`kling_pro`).
- `user` (string, required) — ID пользователя/сессии для трекинга.
- `images` (array, optional) — входные изображения/референсы.
- `params.duration` (number, optional) — длительность.
- `params.mode` (string, optional) — `std` или `pro` (нормализуется).
- `params.aspect_ratio` (string, optional) — соотношение сторон.
- `params.sound` (boolean, optional) — включение звука.
- `params.multi_shot` (boolean, optional) — доступно в multi-shot сценарии.
- `params.resolution` (string, optional) — если `1080p`, то `mode=pro`; если `720p`, то `mode=std`.

## Полезная информация

- Начинайте с короткого `prompt` и добавляйте уточнения по шагам.
- Для стабильных результатов используйте одинаковый `user` в рамках одного сценария.
- Если ответ слишком общий, добавьте формат результата прямо в `prompt`.
