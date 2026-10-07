# Текстовые модели

Эти модели подходят для генерации и редактирования текста, анализа, программирования и задач с рассуждением. Для изображений используйте [Vision](vision.md), а для файлов — [Создание документов](document-creation.md).

## Как отправить запрос

- URL-адрес: `https://api.pxsto.re/main/puzzlebot-tracker`
- Метод: `POST`
- Вид запроса в PuzzleBot: `Сформированный`

Минимальный набор полей: `bot`, `token`, `user`, `model` и `prompt`.

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // обязательно: username бота.
  "token": "[Ваш API-токен]", // обязательно: API-токен бота.
  "user": "{{USER_ID_TEXT}}", // обязательно: ID пользователя или сессии.
  "model": "gpt_5", // обязательно: ключ модели из таблицы ниже.
  "prompt": "{{prompt}}", // обязательно: текст задачи.
  "role": "[текст роли]", // необязательно: стиль и дополнительные инструкции.
  "send_answer": true // необязательно: отправить ответ в чат.
}
```

## Параметры

| Ключ | Значение | Описание |
| --- | --- | --- |
| `bot` | `{{BOT_USERNAME_TEXT}}` | Username бота. |
| `token` | API-токен | Токен для доступа к Трекеру. |
| `user` | `{{USER_ID_TEXT}}` | ID пользователя или сессии. |
| `model` | ключ из таблицы | Выбранная модель. |
| `prompt` | текст | Задача для модели. |
| `role` | текст | Необязательная роль, стиль или ограничения. |
| `params.max_tokens` | число | Необязательное ограничение длины ответа. |
| `send_answer` | `true` / `false` | Отправить ответ в чат или сохранить в `{{tracker_answer}}`. |
| `chat` | числовой ID, например `-1001234567890` | Для ответа в Telegram-группу или форум. Без поля ответ отправляется пользователю из `user`. |
| `topic` | ID топика, например `123` | Для ответа в конкретный топик Telegram-форума; передавайте вместе с `chat`. Для обычной группы поле не нужно. |

## Ответ в группу или топик

Для отправки в группу добавьте `chat`, для конкретного топика форума — `chat` и `topic`. Эти поля передаются на верхнем уровне запроса, рядом с `user` и `model`. `user` остаётся ID пользователя, который запускает запрос.

```jsonc
{
  "bot": "{{BOT_USERNAME_TEXT}}", // username бота.
  "token": "[Ваш API-токен]", // API-токен интеграции.
  "user": "{{USER_ID_TEXT}}", // ID пользователя, а не группы.
  "model": "gpt_5", // ключ включённой модели.
  "prompt": "{{prompt}}", // вопрос пользователя.
  "send_answer": true, // отправить ответ в Telegram.
  "chat": "-1001234567890", // пример: замените на ID группы-форума.
  "topic": 123 // пример: замените на ID топика; для обычной группы удалите поле.
}
```

Бот должен быть добавлен в группу и иметь право отправлять сообщения. Если команду запускают в группе, подключите её в PuzzleBot как ресурс и настройте запуск команды. ID топика — это `message_thread_id` входящего Telegram-сообщения, а не номер произвольного сообщения. При `send_answer: false` ответ сохраняется в `{{tracker_answer}}` без отправки в группу или топик.

[Подробная настройка групп и топиков, получение ID и разбор ошибок](https://docs.pxsto.re/tracker#otvety-v-gruppy-i-topiki-telegram).

## Основные модели

| Ключ `model` | Модель | Стоимость |
| --- | --- | ---: |
| `gpt_free` | GPT-5.4 Nano (free) | 💠0 |
| `gpt_5_mini` | GPT-5.4 Mini | 💠10 |
| `gpt_5` | GPT-5.4 | 💠25 |
| `gpt_luna` | GPT-5.6 Luna Pro | 💠30 |
| `gpt_terra` | GPT-5.6 Terra Pro | 💠60 |
| `gpt_sol` | GPT-5.6 Sol Pro | 💠120 |
| `claude_4_5_haiku` | Claude 4.5 Haiku | 💠25 |
| `anthropic_claude_sonnet_5` | Anthropic: Claude Sonnet 5 | 💠45 |
| `deepseek` | DeepSeek V3.2 | 💠5 |
| `gemini_3_flash` | Gemini 3.5 Flash | 💠15 |
| `gemini_3_pro` | Gemini 3.1 Pro | 💠38 |
| `gemini_2_5_flash` | Gemini 2.5 Flash Lite | 💠3 |
| `gemini_2_5_pro` | Gemini 2.5 Pro | 💠30 |
| `web_search` | Web Search | 💠30 |
| `gpt_4_1` | GPT-4.1 | 💠28 |

## Дополнительные текстовые модели

Список включённых текстовых моделей стоимостью до **💠150** сверён 07.10.2026. Распознавание аудио находится в отдельном [разделе голоса](../voice/README.md). Ключ передаётся точно как указан в первой колонке.

Для модели, выбранной в плагине, можно использовать `model: global` вместе с `type: text`: ключ отдельной модели в таком запросе не нужен. Полный выбор и доступ для вашего бота проверяйте в интерфейсе плагина.

<details>
<summary>Показать дополнительные модели</summary>

| Ключ `model` | Модель | Стоимость |
| --- | --- | ---: |
| `cohere_north_mini_code_free` | Cohere: North Mini Code (free) | 💠1 |
| `google_gemma_4_26b_a4b_it_free` | Google: Gemma 4 26B A4B  (free) | 💠1 |
| `google_gemma_4_31b_it_free` | Google: Gemma 4 31B (free) | 💠1 |
| `nvidia_nemotron_3_nano_omni_30b_a3b_reasoning_free` | NVIDIA: Nemotron 3 Nano Omni (free) | 💠1 |
| `nvidia_nemotron_3_super_120b_a12b_free` | NVIDIA: Nemotron 3 Super (free) | 💠1 |
| `nvidia_nemotron_3_ultra_550b_a55b_free` | NVIDIA: Nemotron 3 Ultra (free) | 💠1 |
| `nvidia_nemotron_3_5_content_safety_free` | NVIDIA: Nemotron 3.5 Content Safety (free) | 💠1 |
| `poolside_laguna_s_2_1_free` | Poolside: Laguna S 2.1 (free) | 💠1 |
| `poolside_laguna_xs_2_1_free` | Poolside: Laguna XS 2.1 (free) | 💠1 |
| `amazon_nova_lite_v1` | Amazon: Nova Lite 1.0 | 💠2 |
| `amazon_nova_micro_v1` | Amazon: Nova Micro 1.0 | 💠2 |
| `bytedance_seed_seed_1_6_flash` | ByteDance Seed: Seed 1.6 Flash | 💠2 |
| `bytedance_ui_tars_1_5_7b` | ByteDance: UI-TARS 7B | 💠2 |
| `cohere_command_r7b_12_2024` | Cohere: Command R7B (12-2024) | 💠2 |
| `google_gemma_3_12b_it` | Google: Gemma 3 12B | 💠2 |
| `google_gemma_3_4b_it` | Google: Gemma 3 4B | 💠2 |
| `ibm_granite_granite_4_0_h_micro` | IBM: Granite 4.0 Micro | 💠2 |
| `meta_llama_llama_3_1_8b_instruct` | Meta: Llama 3.1 8B Instruct | 💠2 |
| `meta_llama_llama_3_2_1b_instruct` | Meta: Llama 3.2 1B Instruct | 💠2 |
| `meta_llama_llama_3_2_3b_instruct` | Meta: Llama 3.2 3B Instruct | 💠2 |
| `meta_llama_llama_4_scout` | Meta: Llama 4 Scout | 💠2 |
| `meta_llama_llama_guard_4_12b` | Meta: Llama Guard 4 12B | 💠2 |
| `microsoft_phi_4` | Microsoft: Phi 4 | 💠2 |
| `mistralai_ministral_14b_2512` | Mistral: Ministral 3 14B 2512 | 💠2 |
| `mistralai_ministral_3b_2512` | Mistral: Ministral 3 3B 2512 | 💠2 |
| `mistralai_ministral_8b_2512` | Mistral: Ministral 3 8B 2512 | 💠2 |
| `mistralai_mistral_nemo` | Mistral: Mistral Nemo | 💠2 |
| `mistralai_mistral_small_24b_instruct_2501` | Mistral: Mistral Small 3 | 💠2 |
| `mistralai_mistral_small_3_2_24b_instruct` | Mistral: Mistral Small 3.2 24B | 💠2 |
| `gryphe_mythomax_l2_13b` | MythoMax 13B | 💠2 |
| `nvidia_nemotron_3_nano_30b_a3b` | NVIDIA: Nemotron 3 Nano 30B A3B | 💠2 |
| `openai_gpt_oss_120b` | OpenAI: gpt-oss-120b | 💠2 |
| `openai_gpt_oss_20b` | OpenAI: gpt-oss-20b | 💠2 |
| `openai_gpt_oss_safeguard_20b` | OpenAI: gpt-oss-safeguard-20b | 💠2 |
| `poolside_laguna_s_2_1` | Poolside: Laguna S 2.1 | 💠2 |
| `poolside_laguna_xs_2_1` | Poolside: Laguna XS 2.1 | 💠2 |
| `qwen_qwen_2_5_7b_instruct` | Qwen: Qwen2.5 7B Instruct | 💠2 |
| `qwen_qwen3_30b_a3b_instruct_2507` | Qwen: Qwen3 30B A3B Instruct 2507 | 💠2 |
| `qwen_qwen3_32b` | Qwen: Qwen3 32B | 💠2 |
| `qwen_qwen3_coder_30b_a3b_instruct` | Qwen: Qwen3 Coder 30B A3B Instruct | 💠2 |
| `qwen_qwen3_5_9b` | Qwen: Qwen3.5-9B | 💠2 |
| `qwen_qwen3_5_flash_02_23` | Qwen: Qwen3.5-Flash | 💠2 |
| `qwen_qwen3_7_flash` | Qwen: Qwen3.7 Flash | 💠2 |
| `rekaai_reka_edge` | Reka Edge | 💠2 |
| `rekaai_reka_flash_3` | Reka Flash 3 | 💠2 |
| `sao10k_l3_lunaris_8b` | Sao10K: Llama 3 8B Lunaris | 💠2 |
| `stepfun_step_3_5_flash` | StepFun: Step 3.5 Flash | 💠2 |
| `tencent_hy3_preview` | Tencent: Hy3 preview | 💠2 |
| `bytedance_seed_seed_2_0_mini` | ByteDance Seed: Seed-2.0-Mini | 💠3 |
| `deepseek_deepseek_v4_flash` | DeepSeek: DeepSeek V4 Flash | 💠3 |
| `nvidia_nemotron_3_super_120b_a12b` | NVIDIA: Nemotron 3 Super | 💠3 |
| `openai_gpt_4_1_nano` | OpenAI: GPT-4.1 Nano | 💠3 |
| `openai_gpt_5_nano` | OpenAI: GPT-5 Nano | 💠3 |
| `xiaomi_mimo_v2_5` | Xiaomi: MiMo-V2.5 | 💠3 |
| `z_ai_glm_4_7_flash` | Z.ai: GLM 4.7 Flash | 💠3 |
| `google_gemma_3_27b_it` | Google: Gemma 3 27B | 💠4 |
| `google_gemma_4_31b_it` | Google: Gemma 4 31B | 💠4 |
| `meta_llama_llama_3_3_70b_instruct` | Meta: Llama 3.3 70B Instruct | 💠4 |
| `qwen_qwen3_30b_a3b` | Qwen: Qwen3 30B A3B | 💠4 |
| `qwen_qwen3_8b` | Qwen: Qwen3 8B | 💠4 |
| `qwen_qwen3_vl_32b_instruct` | Qwen: Qwen3 VL 32B Instruct | 💠4 |
| `qwen_qwen3_vl_8b_instruct` | Qwen: Qwen3 VL 8B Instruct | 💠4 |
| `tencent_hy3` | Tencent: Hy3 | 💠4 |
| `catalog_cursor_composer_2_5` | Composer 2.5 | 💠5 |
| `deepseek_deepseek_v3_2_exp` | DeepSeek: DeepSeek V3.2 Exp | 💠5 |
| `google_gemma_4_26b_a4b_it` | Google: Gemma 4 26B A4B | 💠5 |
| `qwen_qwen3_235b_a22b_2507` | Qwen: Qwen3 235B A22B Instruct 2507 | 💠5 |
| `tencent_hunyuan_a13b_instruct` | Tencent: Hunyuan A13B Instruct | 💠5 |
| `cohere_command_r_08_2024` | Cohere: Command R (08-2024) | 💠6 |
| `meta_llama_llama_3_1_70b_instruct` | Meta: Llama 3.1 70B Instruct | 💠6 |
| `mistralai_mistral_small_2603` | Mistral: Mistral Small 4 | 💠6 |
| `mistralai_mistral_saba` | Mistral: Saba | 💠6 |
| `openai_gpt_4o_mini` | OpenAI: GPT-4o-mini | 💠6 |
| `openai_gpt_4o_mini_2024_07_18` | OpenAI: GPT-4o-mini (2024-07-18) | 💠6 |
| `qwen_qwen_2_5_72b_instruct` | Qwen2.5 72B Instruct | 💠6 |
| `qwen_qwen3_vl_30b_a3b_instruct` | Qwen: Qwen3 VL 30B A3B Instruct | 💠6 |
| `thedrummer_cydonia_24b_v4_1` | TheDrummer: Cydonia 24B V4.1 | 💠6 |
| `thedrummer_unslopnemo_12b` | TheDrummer: UnslopNemo 12B | 💠6 |
| `upstage_solar_pro_3` | Upstage: Solar Pro 3 | 💠6 |
| `cognitivecomputations_dolphin_mistral_24b_venice_edition` | Venice: Uncensored | 💠6 |
| `mistralai_mistral_small_3_1_24b_instruct` | Mistral: Mistral Small 3.1 24B | 💠7 |
| `qwen_qwen3_next_80b_a3b_thinking` | Qwen: Qwen3 Next 80B A3B Thinking | 💠7 |
| `deepseek_deepseek_chat` | DeepSeek: DeepSeek V3 | 💠8 |
| `inception_mercury_2` | Inception: Mercury 2 | 💠8 |
| `meituan_longcat_2_0` | Meituan: LongCat 2.0 | 💠8 |
| `meta_llama_llama_4_maverick` | Meta: Llama 4 Maverick | 💠8 |
| `minimax_minimax_m2_5` | MiniMax: MiniMax M2.5 | 💠8 |
| `qwen_qwen_plus_2025_07_28` | Qwen: Qwen Plus 0728 | 💠8 |
| `qwen_qwen_plus` | Qwen: Qwen-Plus | 💠8 |
| `z_ai_glm_4_5_air` | Z.ai: GLM 4.5 Air | 💠8 |
| `arcee_ai_trinity_large_thinking` | Arcee AI: Trinity Large Thinking | 💠9 |
| `qwen_qwen3_14b` | Qwen: Qwen3 14B | 💠9 |
| `qwen_qwen3_coder_flash` | Qwen: Qwen3 Coder Flash | 💠9 |
| `qwen_qwen3_coder_next` | Qwen: Qwen3 Coder Next | 💠9 |
| `qwen_qwen3_5_35b_a3b` | Qwen: Qwen3.5-35B-A3B | 💠9 |
| `qwen_qwen3_6_35b_a3b` | Qwen: Qwen3.6 35B A3B | 💠9 |
| `undi95_remm_slerp_l2_13b` | ReMM SLERP 13B | 💠9 |
| `amazon_nova_pro_v1` | Amazon: Nova Pro 1.0 | 💠10 |
| `deepseek_deepseek_chat_v3_1` | DeepSeek: DeepSeek V3.1 | 💠10 |
| `deepseek_deepseek_v3_1_terminus` | DeepSeek: DeepSeek V3.1 Terminus | 💠10 |
| `grok_4` | Grok 4.3 | 💠10 |
| `vision` | Grok 4.3 Vision | 💠10 |
| `mancer_weaver` | Mancer: Weaver (alpha) | 💠10 |
| `minimax_minimax_m2` | MiniMax: MiniMax M2 | 💠10 |
| `minimax_minimax_m2_7` | MiniMax: MiniMax M2.7 | 💠10 |
| `mistralai_codestral_2508` | Mistral: Codestral 2508 | 💠10 |
| `nousresearch_hermes_4_405b` | Nous: Hermes 4 405B | 💠10 |
| `latest_openai_gpt_mini_latest` | OpenAI GPT Mini Latest | 💠10 |
| `qwen_qwen3_coder_plus` | Qwen: Qwen3 Coder Plus | 💠10 |
| `qwen_qwen3_max` | Qwen: Qwen3 Max | 💠10 |
| `qwen_qwen3_max_thinking` | Qwen: Qwen3 Max Thinking | 💠10 |
| `qwen_qwen3_next_80b_a3b_instruct` | Qwen: Qwen3 Next 80B A3B Instruct | 💠10 |
| `relace_relace_search` | Relace: Relace Search | 💠10 |
| `microsoft_wizardlm_2_8x22b` | WizardLM-2 8x22B | 💠10 |
| `z_ai_glm_4_6v` | Z.ai: GLM 4.6V | 💠10 |
| `z_ai_glm_5_turbo` | Z.ai: GLM 5 Turbo | 💠10 |
| `z_ai_glm_5_1` | Z.ai: GLM 5.1 | 💠10 |
| `x_ai_grok_4_20` | xAI: Grok 4.20 | 💠10 |
| `x_ai_grok_4_20_multi_agent` | xAI: Grok 4.20 Multi-Agent | 💠10 |
| `deepseek_deepseek_chat_v3_0324` | DeepSeek: DeepSeek V3 0324 | 💠11 |
| `deepseek_deepseek_v4_pro` | DeepSeek: DeepSeek V4 Pro | 💠11 |
| `google_gemma_2_27b_it` | Google: Gemma 2 27B | 💠11 |
| `minimax_minimax_01` | MiniMax: MiniMax-01 | 💠11 |
| `qwen_qwen3_coder` | Qwen: Qwen3 Coder 480B A35B | 💠11 |
| `qwen_qwen3_6_flash` | Qwen: Qwen3.6 Flash | 💠11 |
| `stepfun_step_3_7_flash` | StepFun: Step 3.7 Flash | 💠11 |
| `thedrummer_skyfall_36b_v2` | TheDrummer: Skyfall 36B V2 | 💠11 |
| `xiaomi_mimo_v2_5_pro` | Xiaomi: MiMo-V2.5-Pro | 💠11 |
| `minimax_minimax_m2_her` | MiniMax: MiniMax M2-her | 💠12 |
| `minimax_minimax_m2_1` | MiniMax: MiniMax M2.1 | 💠12 |
| `minimax_minimax_m3` | MiniMax: MiniMax M3 | 💠12 |
| `nousresearch_hermes_3_llama_3_1_70b` | Nous: Hermes 3 70B Instruct | 💠12 |
| `qwen_qwen3_vl_8b_thinking` | Qwen: Qwen3 VL 8B Thinking | 💠12 |
| `sao10k_l3_3_euryale_70b` | Sao10K: Llama 3.3 Euryale 70B | 💠12 |
| `aion_labs_aion_3_0_mini` | AionLabs: Aion-3.0-Mini | 💠13 |
| `deepseek_deepseek_r1_distill_llama_70b` | DeepSeek: R1 Distill Llama 70B | 💠13 |
| `google_gemini_3_5_flash_lite` | Google: Gemini 3.5 Flash Lite | 💠13 |
| `qwen_qwen3_7_plus` | Qwen: Qwen3.7 Plus | 💠13 |
| `baidu_ernie_4_5_vl_424b_a47b` | Baidu: ERNIE 4.5 VL 424B A47B | 💠14 |
| `perceptron_perceptron_mk1` | Perceptron: Perceptron Mk1 | 💠14 |
| `qwen_qwen_2_5_coder_32b_instruct` | Qwen2.5 Coder 32B Instruct | 💠14 |
| `qwen_qwen3_30b_a3b_thinking_2507` | Qwen: Qwen3 30B A3B Thinking 2507 | 💠14 |
| `qwen_qwen3_vl_30b_a3b_thinking` | Qwen: Qwen3 VL 30B A3B Thinking | 💠14 |
| `sao10k_l3_1_euryale_70b` | Sao10K: Llama 3.1 Euryale 70B v2.2 | 💠14 |
| `catalog_anthropic_claude_haiku_4_5` | Claude Haiku 4.5 | 💠15 |
| `catalog_cursor_composer_2_5_fast` | Composer 2.5 Fast | 💠15 |
| `google_gemini_3_1_flash_lite` | Google: Gemini 3.1 Flash Lite | 💠15 |
| `google_gemini_3_1_flash_lite_preview` | Google: Gemini 3.1 Flash Lite Preview | 💠15 |
| `qwen_qwen2_5_vl_72b_instruct` | Qwen: Qwen2.5 VL 72B Instruct | 💠15 |
| `qwen_qwen3_5_plus_02_15` | Qwen: Qwen3.5 Plus 2026-02-15 | 💠15 |
| `qwen_qwen3_5_27b` | Qwen: Qwen3.5-27B | 💠15 |
| `arcee_ai_virtuoso_large` | Arcee AI: Virtuoso Large | 💠16 |
| `mistralai_mistral_large_2512` | Mistral: Mistral Large 3 2512 | 💠17 |
| `morph_morph_v3_fast` | Morph: Morph V3 Fast | 💠17 |
| `nousresearch_hermes_3_llama_3_1_405b` | Nous: Hermes 3 405B Instruct | 💠17 |
| `openai_gpt_3_5_turbo` | OpenAI: GPT-3.5 Turbo | 💠17 |
| `openai_gpt_4_1_mini` | OpenAI: GPT-4.1 Mini | 💠17 |
| `perplexity_sonar` | Perplexity: Sonar | 💠17 |
| `openai_o3_mini` | OpenAI: o3 Mini | 💠18 |
| `openai_o3_mini_high` | OpenAI: o3 Mini High | 💠18 |
| `openai_o4_mini` | OpenAI: o4 Mini | 💠18 |
| `openai_o4_mini_high` | OpenAI: o4 Mini High | 💠18 |
| `qwen_qwen3_vl_235b_a22b_instruct` | Qwen: Qwen3 VL 235B A22B Instruct | 💠18 |
| `qwen_qwen3_5_plus_20260420` | Qwen: Qwen3.5 Plus 2026-04-20 | 💠18 |
| `relace_relace_apply_3` | Relace: Relace Apply 3 | 💠18 |
| `z_ai_glm_4_7` | Z.ai: GLM 4.7 | 💠18 |
| `bytedance_seed_seed_1_6` | ByteDance Seed: Seed 1.6 | 💠19 |
| `bytedance_seed_seed_2_0_lite` | ByteDance Seed: Seed-2.0-Lite | 💠19 |
| `openai_gpt_5_mini` | OpenAI: GPT-5 Mini | 💠19 |
| `openai_gpt_5_1_codex_mini` | OpenAI: GPT-5.1-Codex-Mini | 💠19 |
| `qwen_qwen3_235b_a22b` | Qwen: Qwen3 235B A22B | 💠19 |
| `qwen_qwen3_6_plus` | Qwen: Qwen3.6 Plus | 💠19 |
| `kwaipilot_kat_coder_pro_v2_5` | Kwaipilot: KAT-Coder-Pro V2.5 | 💠20 |
| `moonshotai_kimi_k2_7_code` | MoonshotAI: Kimi K2.7 Code | 💠20 |
| `qwen_qwen3_5_122b_a10b` | Qwen: Qwen3.5-122B-A10B | 💠20 |
| `qwen_qwen3_6_27b` | Qwen: Qwen3.6 27B | 💠20 |
| `aion_labs_aion_2_0` | AionLabs: Aion-2.0 | 💠21 |
| `aion_labs_aion_rp_llama_3_1_8b` | AionLabs: Aion-RP 1.0 (8B) | 💠21 |
| `mistralai_devstral_2512` | Mistral: Devstral 2 2512 | 💠21 |
| `mistralai_mistral_medium_3` | Mistral: Mistral Medium 3 | 💠21 |
| `mistralai_mistral_medium_3_1` | Mistral: Mistral Medium 3.1 | 💠21 |
| `z_ai_glm_4_5v` | Z.ai: GLM 4.5V | 💠21 |
| `z_ai_glm_4_6` | Z.ai: GLM 4.6 | 💠21 |
| `z_ai_glm_5_2` | Z.ai: GLM 5.2 | 💠21 |
| `deepseek_deepseek_r1_0528` | DeepSeek: R1 0528 | 💠23 |
| `google_gemini_3_6_flash` | Google: Gemini 3.6 Flash | 💠23 |
| `nvidia_nemotron_3_ultra_550b_a55b` | NVIDIA: Nemotron 3 Ultra | 💠23 |
| `amazon_nova_2_lite_v1` | Amazon: Nova 2 Lite | 💠24 |
| `google_gemini_2_5_flash` | Google: Gemini 2.5 Flash | 💠24 |
| `minimax_minimax_m1` | MiniMax: MiniMax M1 | 💠24 |
| `morph_morph_v3_large` | Morph: Morph V3 Large | 💠24 |
| `qwen_qwen3_5_397b_a17b` | Qwen: Qwen3.5 397B A17B | 💠24 |
| `z_ai_glm_4_5` | Z.ai: GLM 4.5 | 💠24 |
| `latest_anthropic_claude_haiku_latest` | Anthropic Claude Haiku Latest | 💠25 |
| `anthropic_claude_haiku_4_5` | Anthropic: Claude Haiku 4.5 | 💠25 |
| `catalog_xai_grok_4_5` | Grok 4.5 | 💠25 |
| `moonshotai_kimi_k2` | MoonshotAI: Kimi K2 0711 | 💠25 |
| `qwen_qwen3_vl_235b_a22b_thinking` | Qwen: Qwen3 VL 235B A22B Thinking | 💠25 |
| `openai_gpt_3_5_turbo_0613` | OpenAI: GPT-3.5 Turbo (older v0613) | 💠26 |
| `x_ai_grok_build_0_1` | xAI: Grok Build 0.1 | 💠26 |
| `moonshotai_kimi_k2_0905` | MoonshotAI: Kimi K2 0905 | 💠27 |
| `moonshotai_kimi_k2_thinking` | MoonshotAI: Kimi K2 Thinking | 💠27 |
| `thinkingmachines_inkling` | Thinking Machines: Inkling | 💠27 |
| `ai21_jamba_large_1_7` | AI21: Jamba Large 1.7 | 💠28 |
| `deepseek_deepseek_r1` | DeepSeek: R1 | 💠28 |
| `openai_o3` | OpenAI: o3 | 💠28 |
| `perplexity_sonar_deep_research` | Perplexity: Sonar Deep Research | 💠28 |
| `perplexity_sonar_reasoning_pro` | Perplexity: Sonar Reasoning Pro | 💠28 |
| `z_ai_glm_5v_turbo` | Z.ai: GLM 5V Turbo | 💠28 |
| `moonshotai_kimi_k2_6` | MoonshotAI: Kimi K2.6 | 💠29 |
| `qwen_qwen3_235b_a22b_thinking_2507` | Qwen: Qwen3 235B A22B Thinking 2507 | 💠29 |
| `google_gemini_2_5_pro_preview_05_06` | Google: Gemini 2.5 Pro Preview 05-06 | 💠30 |
| `google_gemini_2_5_pro_preview` | Google: Gemini 2.5 Pro Preview 06-05 | 💠30 |
| `google_gemini_3_flash_preview` | Google: Gemini 3 Flash Preview | 💠30 |
| `meta_muse_spark_1_1` | Meta: Muse Spark 1.1 | 💠30 |
| `moonshotai_kimi_k2_5` | MoonshotAI: Kimi K2.5 | 💠30 |
| `openai_gpt_3_5_turbo_instruct` | OpenAI: GPT-3.5 Turbo Instruct | 💠30 |
| `openai_gpt_5` | OpenAI: GPT-5 | 💠30 |
| `openai_gpt_5_1` | OpenAI: GPT-5.1 | 💠30 |
| `openai_gpt_5_1_codex` | OpenAI: GPT-5.1-Codex | 💠30 |
| `openai_gpt_5_1_codex_max` | OpenAI: GPT-5.1-Codex-Max | 💠30 |
| `openai_gpt_5_6_luna` | OpenAI: GPT-5.6 Luna | 💠30 |
| `z_ai_glm_5` | Z.ai: GLM 5 | 💠30 |
| `openai_gpt_5_2` | OpenAI: GPT-5.2 | 💠32 |
| `openai_gpt_5_2_codex` | OpenAI: GPT-5.2-Codex | 💠32 |
| `openai_gpt_5_3_codex` | OpenAI: GPT-5.3-Codex | 💠32 |
| `writer_palmyra_x5` | Writer: Palmyra X5 | 💠33 |
| `latest_google_gemini_pro_latest` | Google Gemini Pro Latest | 💠38 |
| `google_gemini_3_1_pro_preview_customtools` | Google: Gemini 3.1 Pro Preview Custom Tools | 💠38 |
| `openai_gpt_3_5_turbo_16k` | OpenAI: GPT-3.5 Turbo 16k | 💠38 |
| `qwen_qwen3_6_max_preview` | Qwen: Qwen3.6 Max Preview | 💠42 |
| `cohere_command_a` | Cohere: Command A | 💠44 |
| `cohere_command_r_plus_08_2024` | Cohere: Command R+ (08-2024) | 💠44 |
| `openai_gpt_4o` | OpenAI: GPT-4o | 💠44 |
| `openai_gpt_4o_2024_08_06` | OpenAI: GPT-4o (2024-08-06) | 💠44 |
| `openai_gpt_4o_2024_11_20` | OpenAI: GPT-4o (2024-11-20) | 💠44 |
| `x_ai_grok_4_5` | xAI: Grok 4.5 | 💠44 |
| `latest_x_ai_grok_latest` | xAI: Grok Latest | 💠44 |
| `latest_anthropic_claude_sonnet_latest` | Anthropic Claude Sonnet Latest | 💠45 |
| `catalog_anthropic_claude_sonnet_4_6` | Claude Sonnet 4.6 | 💠45 |
| `catalog_anthropic_claude_sonnet_5` | Claude Sonnet 5 | 💠45 |
| `anthracite_org_magnum_v4_72b` | Magnum v4 72B | 💠51 |
| `mistralai_mistral_large` | Mistral Large | 💠51 |
| `mistralai_mistral_large_2407` | Mistral Large 2407 | 💠51 |
| `mistralai_mixtral_8x22b_instruct` | Mistral: Mixtral 8x22B Instruct | 💠51 |
| `aion_labs_aion_3_0` | AionLabs: Aion-3.0 | 💠54 |
| `latest_google_gemini_flash_latest` | Google Gemini Flash Latest | 💠54 |
| `mistralai_mistral_medium_3_5` | Mistral: Mistral Medium 3.5 | 💠54 |
| `openai_gpt_5_6_terra` | OpenAI: GPT-5.6 Terra | 💠60 |
| `catalog_anthropic_claude_opus_4_6` | Claude Opus 4.6 | 💠75 |
| `catalog_anthropic_claude_opus_4_7` | Claude Opus 4.7 | 💠75 |
| `catalog_anthropic_claude_opus_4_8` | Claude Opus 4.8 | 💠75 |
| `anthropic_claude_sonnet_4` | Anthropic: Claude Sonnet 4 | 💠105 |
| `anthropic_claude_sonnet_4_5` | Anthropic: Claude Sonnet 4.5 | 💠105 |
| `anthropic_claude_sonnet_4_6` | Anthropic: Claude Sonnet 4.6 | 💠105 |
| `catalog_moonshotai_kimi_k3` | Kimi K3 | 💠105 |
| `latest_moonshotai_kimi_latest` | MoonshotAI Kimi Latest | 💠105 |
| `moonshotai_kimi_k3` | MoonshotAI: Kimi K3 | 💠105 |
| `perplexity_sonar_pro` | Perplexity: Sonar Pro | 💠105 |
| `perplexity_sonar_pro_search` | Perplexity: Sonar Pro Search | 💠105 |
| `openai_gpt_4o_2024_05_13` | OpenAI: GPT-4o (2024-05-13) | 💠113 |
| `latest_openai_gpt_latest` | OpenAI GPT Latest | 💠120 |
| `openai_gpt_chat_latest` | OpenAI: GPT Chat Latest | 💠120 |
| `openai_gpt_5_5` | OpenAI: GPT-5.5 | 💠120 |
| `openai_gpt_5_6_sol` | OpenAI: GPT-5.6 Sol | 💠120 |

</details>

## Ответ

Запрос выполняется асинхронно: HTTP-ответ подтверждает приём запроса, а не содержит готовый результат модели.

При `send_answer=true` готовый результат отправляется в чат. При `send_answer=false` отправка в чат отключена; используйте `{{tracker_answer}}` после завершения задачи. Сохранение в эту переменную должно быть включено в настройках бота. Для медиа значение переменной зависит от настройки «ссылка / file_id».
