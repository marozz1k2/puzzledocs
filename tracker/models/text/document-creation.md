# Создание документов

Практическая инструкция по запуску генерации документов через `document_tracker` в no-code API.

## Спецификация

- URL-адрес: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид: `Сформированный`

### Действие в команде

В нужной команде (например, `document_tracker`) добавьте действие **«Отправить запрос»** с параметрами выше.

## Минимальный набор параметров

Обязательные параметры:

- `user = {{USER_ID_TEXT}}`
- `bot = {{BOT_USERNAME_TEXT}}`
- `token = [ваш API-токен]`
- `model = gpt-5` (или другая разрешённая модель)
- `document = true`
- `format = pdf` или `docx`
- `style = modern` или `classic`
- `role = роль ИИ` (например, `Ты опытный юрист`)
- `prompt = текст задачи` (или переменная)

Дополнительно (необязательно):

- `send_answer = true|false`
- `chat = -100...` (если нужна отправка в группу/канал)
- `topic = 123` (если нужна отправка в топик)

## Новые параметры (добавлены, старые не ломают)

Можно передавать дополнительно:

- `template = classic|modern|custom`  
  Приоритетнее `style` для выбора шаблона документа.
- `custom_template = ...`  
  Пользовательский шаблон текста (используется при `template=custom`).
- `custom_font = Times New Roman|Liberation Serif|Inter|Montserrat|PT Sans|...`  
  Выбранный шрифт документа из настроек ЛК.
  Команда для вызова при ошибке обработки.

Совместимость:

- `style` продолжает работать как раньше.
- `template` и `style` можно передавать вместе, но рекомендуется использовать `template`.
- Для обратной совместимости `customTemplate` и `customFont` также поддерживаются как алиасы.

## Как сейчас работает PDF

Для ветки `format=pdf` при HTML-источнике используется WeasyPrint-контур:

1. Формируется `document-source.html`.
2. Добавляется CSS колонтитула (номер страницы).
3. Рендер идёт через контейнер `px_weasy`.
4. Если WeasyPrint недоступен, применяется fallback на LibreOffice.

Для `docx`/`odt` остаётся LibreOffice-пайплайн.

## Готовый пример запроса (расширенный)

```text
user = {{USER_ID_TEXT}}
bot = {{BOT_USERNAME_TEXT}}
token = YOUR_TOKEN
model = gpt-5
document = true
format = pdf
template = custom
style = modern
custom_template = Договор оказания услуг: ...
custom_font = Montserrat
role = Ты опытный юрист
prompt = Сформируй договор на основе данных: {{client}}
send_answer = true
chat = -1001234567890
topic = 12
```
