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

* Бесплатный тариф: При старте бота вы назначаете всем пользователям категории `mj_mute`, `suno_mute`, `kling_mute`, не назначая общую категорию `gpt_mute`, которая блокирует текстовые модели.
* Платный тариф: После того как пользователь оплачивает подписку, вы с помощью действия «Удалить категорию» снимаете с него все ограничения.

**Кейс 3. Отключение неиспользуемой модели.** Вы решили, что ваш бот не будет поддерживать генерацию музыки. Чтобы пользователи случайно не пытались её вызвать, вы можете при старте бота всем пользователям сразу присвоить категорию `suno_mute`.

## Категории действующих моделей

Список основных моделей сверён 07.10.2026. Назначение категории `..._mute` **запрещает** соответствующую задачу. Оно не включает модель и не добавляет баланс.

Общая категория `gpt_mute` ограничивает платные текстовые запросы, в том числе веб-поиск. Бесплатная модель `gpt_free` не блокируется общей `gpt_mute`, но учитывает собственную запрещающую категорию. Отдельные категории указаны ниже.

| Название | Модель / задача |
| --- | --- |
| `anthropic_claude_haiku_4_5_mute` | Anthropic: Claude Haiku 4.5 |
| `claude_4_5_haiku_mute` | Claude 4.5 Haiku |
| `deepseek_mute` | DeepSeek V3.2 |
| `gpt_4_1_mute` | GPT-4.1 |
| `gpt_5_mute` | GPT-5.4 |
| `gpt_5_mini_mute` | GPT-5.4 Mini |
| `gpt_free_mute` | GPT-5.4 Nano (free) |
| `gpt_luna_mute` | GPT-5.6 Luna Pro |
| `gpt_sol_mute` | GPT-5.6 Sol Pro |
| `gpt_terra_mute` | GPT-5.6 Terra Pro |
| `gemini_2_5_flash_mute` | Gemini 2.5 Flash Lite |
| `gemini_2_5_pro_mute` | Gemini 2.5 Pro |
| `gemini_3_pro_mute` | Gemini 3.1 Pro |
| `gemini_3_flash_mute` | Gemini 3.5 Flash |
| `grok_4_mute` | Grok 4.3 |
| `vision_mute` | Grok 4.3 Vision |
| `gpt_audio_mute` | Voxtral Mini Transcribe |
| `web_search_mute` | Web Search |
| `flux_2_flex_mute` | FLUX.2 Flex |
| `flux_2_klein_mute` | FLUX.2 Klein |
| `flux_2_max_mute` | FLUX.2 Max |
| `flux_2_pro_mute` | FLUX.2 Pro |
| `gpt_image_mute` | GPT Image 2.5 |
| `kling_image_mute` | Kling O1 Image |
| `midjourney_mute` | Midjourney |
| `nano_banana_mute` | Nano Banana 2 |
| `nano_banana_pro_mute` | Nano Banana Pro |
| `seedream_mute` | Seedream 5.0 Lite |
| `image_upscale_mute` | Topaz Image Upscale |
| `suno_mute` | Suno |
| `grok_video_mute` | Grok Imagine Video |
| `kling_2_5_mute` | Kling 2.5 Turbo |
| `kling_2_5_pro_mute` | Kling 2.5 Turbo Pro |
| `kling_2_6_mute` | Kling 2.6 |
| `kling_2_6_motion_control_mute` | Kling 2.6 Motion Control |
| `kling_2_6_pro_mute` | Kling 2.6 Pro |
| `kling_mute` | Kling 3.0 |
| `kling_3_motion_control_mute` | Kling 3.0 Motion Control |
| `kling_3_motion_control_pro_mute` | Kling 3.0 Motion Control Pro |
| `kling_3_omni_mute` | Kling 3.0 Omni |
| `kling_3_omni_edit_mute` | Kling 3.0 Omni Edit |
| `kling_3_omni_edit_pro_mute` | Kling 3.0 Omni Edit Pro |
| `kling_3_omni_pro_mute` | Kling 3.0 Omni Pro |
| `kling_pro_mute` | Kling 3.0 Pro |
| `kling_omni_mute` | Kling O1 |
| `kling_omni_pro_mute` | Kling O1 Pro |
| `midjourney_video_mute` | Midjourney Video |
| `minimax_hailuo_mute` | MiniMax Hailuo 2.3 |
| `hollywood_video_mute` | Seedance 2.0 Pro |
| `veo_fast_mute` | Veo 3.1 Fast |
| `veo_mute` | Veo 3.1 Quality |

Для другой модели проверьте назначенную ей категорию в настройках; не создавайте имя по догадке. Удаление категории не включает отключённую модель и не отменяет ограничения тарифа.
