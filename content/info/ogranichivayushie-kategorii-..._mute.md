# Ограничивающие категории (...\_mute)

В этом руководстве мы разберем инструмент для управления доступом пользователей к нейросетям — ограничивающие категории. Это специальный функционал Puzzle AI, который позволяет вам включать или отключать доступ к конкретным AI-моделям для отдельных пользователей или групп.

**Принцип очень прост:** если пользователю назначена определенная категория (например, `mj_mute`), система Puzzle AI будет игнорировать все его запросы к соответствующей модели (в данном случае, к Midjourney). Это позволяет вам гибко управлять тем, кто и какими функциями может пользоваться в вашем боте.

### **Шаг 1. Как создать ограничивающую категорию**

1. В конструкторе PuzzleBot перейдите в настройки вашего бота и откройте вкладку «Модерация».
2. Нажмите на иконку «плюс» (`+`) в правом верхнем углу, чтобы создать новую категорию.
3. Введите точное название категории.

<figure><img src="../.gitbook/assets/image (172).png" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
**Важно:** Название должно строго соответствовать списку ниже
{% endhint %}

### **Шаг 2. Как назначить категорию пользователю**

Назначить категорию можно множеством способов, в зависимости от логики работы вашего бота:

1. **Вручную через диалоги в PuzzleBot**

<figure><img src="../.gitbook/assets/image (173).png" alt=""><figcaption></figcaption></figure>

2. **С помощью действия в команде.** Например, в команде-ошибке `textModels_error` (из руководства по [управлению балансом и лимитом пользователей](../upravlenie-botom-dostup-logika-i-monetizaciya/osnovnaya-logika/upravlenie-balansom-i-limitom-polzovatelei.md)) можно добавить действие «Добавить категорию» и указать `gpt_mute`.

<figure><img src="../.gitbook/assets/image (174).png" alt=""><figcaption></figcaption></figure>

3. **При старте бота (/start) для всех новых пользователей.** Например, если вы не используете конкретную модель в вашем боте.

<figure><img src="../.gitbook/assets/image (175).png" alt=""><figcaption></figcaption></figure>

4. **Для монетизации вашего бота.** Например, снимать ограничения после оплаты.

<figure><img src="../.gitbook/assets/image (176).png" alt=""><figcaption></figcaption></figure>

### Практические кейсы и примеры использования

Вот несколько сценариев, как можно использовать ограничивающие категории:

**Кейс 1. Блокировка при нулевом балансе (самый частый)**. Вы настраиваете команду-триггер `..._done` для списания запросов. В условии, которое проверяет баланс, вы настраиваете правило: если баланс пользователя равен нулю, ему автоматически присваивается категория `gpt_mute`, и он больше не может использовать **Gpt** до пополнения баланса.

**Кейс 2. Создание тарифных планов.** Вы хотите сделать бесплатный и платный тарифы.

* Бесплатный тариф: При старте бота вы назначаете всем пользователям категории `mj_mute`, `suno_mute`, `kling_mute`, оставляя им доступ только к текстовому `gpt_mute`.
* Платный тариф: После того как пользователь оплачивает подписку, вы с помощью действия «Удалить категорию» снимаете с него все ограничения.

**Кейс 3. Отключение неиспользуемой модели.** Вы решили, что ваш бот не будет поддерживать генерацию музыки. Чтобы пользователи случайно не пытались её вызвать, вы можете при старте бота всем пользователям сразу присвоить категорию `suno_mute`.

### Полный список ограничивающих категорий

Ниже представлен полный список официальных категорий и моделей, которые они блокируют.

#### Текстовые модели

***

| Категория  | Блокируемая модель / функция     |
| ---------- | -------------------------------- |
| `gpt_mute` | **Все текстовые модели ChatGpt** |
| `openrouter_text_category` | Используйте как категорию доступа к **OpenRouter text**; отдельная общая `..._mute` категория для OpenRouter text не задана. |

#### Компьютерное зрение

***

| Команда-триггер | Блокирует      |
| --------------- | -------------- |
| `vision_mute`   | **Gpt Vision** |

#### Речевые модели

***

| Команда-триггер     | Блокирует                  |
| ------------------- | -------------------------- |
| `gpt_audio_mute`    | **GPT Audio / Whisper**    |
| `speech_mute`       | **Yandex speech**          |
| `sber_speech_mute`  | **Sber speech**            |
| `openrouter_speech_category` | Используйте как категорию доступа к **OpenRouter speech**; отдельная общая `..._mute` категория не задана. |
| `openrouter_transcription_category` | Используйте как категорию доступа к **OpenRouter transcription**; отдельная общая `..._mute` категория не задана. |

#### **Фото модели**

| Команда-триггер    | Блокирует                   |
| ------------------ | --------------------------- |
| `gpt_image_mute`   | **Gpt image**               |
| `nano_banana_mute` | **Nano banana**             |
| `nano_banana_pro_mute` | **Nano Banana Pro**       |
| `flux_2_mute`      | **Все модели серии Flux 2** |
| `flux_2_klein_mute` | **Flux 2 Klein**           |
| `image_upscale_mute` | **Image Upscale** |
| `seedream_mute` | **Seedream** |
| `kling_image_mute` | **Kling Image** |
| `higgsfield_photo_mute` | **Higgsfield photo** |
| `midjourney_mute`  | **Midjourney fast**         |

#### **Видео модели**

***

| Команда-триггер         | Блокирует            |
| ----------------------- | -------------------- |
| `kling_mute`            | **Kling**            |
| `kling_pro_mute`        | **Kling pro**        |
| `veo_mute`              | **Veo quality**      |
| `veo_fast_mute`         | **Veo fast**         |
| `sora_mute`             | **Sora**             |
| `sora_pro_mute`         | **Sora Pro**         |
| `minimax_hailuo_mute`   | **Minimax Hailuo**   |
| `hollywood_video_mute`  | **Hollywood video**  |
| `midjourney_video_mute` | **Midjourney Video** |
| `higgsfield_video_mute` | **Higgsfield video** |
| `grok_video_mute`       | **Grok video**       |
| `kling_2_5_mute`        | **Kling 2.5 Turbo**  |
| `kling_2_5_pro_mute`    | **Kling 2.5 Turbo Pro** |
| `kling_2_6_mute`        | **Kling 2.6**        |
| `kling_2_6_pro_mute`    | **Kling 2.6 Pro**    |
| `kling_2_6_motion_control_mute` | **Kling 2.6 Motion Control** |
| `kling_3_motion_control_mute` | **Kling 3.0 Motion Control** |
| `kling_3_motion_control_pro_mute` | **Kling 3.0 Motion Control Pro** |
| `kling_3_omni_mute`     | **Kling 3.0 Omni**   |
| `kling_3_omni_pro_mute` | **Kling 3.0 Omni Pro** |
| `kling_3_omni_edit_mute` | **Kling 3.0 Omni Edit** |
| `kling_3_omni_edit_pro_mute` | **Kling 3.0 Omni Edit Pro** |
| `kling_omni_mute`       | **Kling O1**         |
| `kling_omni_pro_mute`   | **Kling O1 Pro**     |

#### Музыкальные модели

***

| Команда-триггер | Блокирует   |
| --------------- | ----------- |
| `suno_mute`     | **Suno AI** |
| `flow_music_mute` | **Flow Music** |
