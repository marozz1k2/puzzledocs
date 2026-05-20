# kling_3_motion_control_pro

Pro-вариант Kling 3.0 Motion Control для видео с детальным управлением движением.

## Как отправлять запрос

- Ссылка: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`
- Формат тела: `application/json` или те же ключи в no-code параметрах.

Обязательная база для любого запроса: `bot`, `token`, `user`, `model`. Опишите движение камеры, объектов и ключевые действия в `prompt`.

## Пример запроса с комментариями

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота в PuzzleBot.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота для доступа к трекеру.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "kling_3_motion_control_pro", // обязательно: точный ключ модели.
  "prompt": "{{prompt}}" // обязательно: описание сцены и движения.
}
```

## Параметры

| Параметр | Тип | Обязательный | Описание |
| --- | --- | --- | --- |
| `bot` | string | Да | Username бота. В PuzzleBot обычно используется `{{BOT_USERNAME_TEXT}}`. |
| `token` | string | Да | API-токен бота для авторизации запроса. |
| `user` | string | Да | ID пользователя или сессии. В PuzzleBot обычно используется `{{USER_ID_TEXT}}`. |
| `model` | string | Да | Точный ключ вызываемой модели: `kling_3_motion_control_pro`. |
| `prompt` | string | Да | Описание видео с акцентом на траекторию движения, камеру и действия. |
| `send_answer` | boolean | Нет | `true` отправляет результат пользователю. `false` сохраняет результат в `{{tracker_answer}}`. По умолчанию `true`. |

## Ответ

```json
{
  "answer": "Ссылка на готовое видео."
}
```
