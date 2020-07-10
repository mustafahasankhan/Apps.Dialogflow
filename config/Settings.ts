import { ISetting, SettingType } from '@rocket.chat/apps-engine/definition/settings';

export enum AppSetting {
    DialogflowBotUsername = 'dialogflow_bot_username',
    DialogflowProjectId = 'dialogflow_project_id',
    DialogflowClientEmail = 'dialogflow_client_email',
    DialogFlowPrivateKey = 'dialogflow_private_key',
    DialogflowFallbackResponsesLimit = 'dialogflow_fallback_responses_limit',
    FallbackTargetDepartment = 'fallback_target_department',
    DialogflowHandoverMessage = 'dialogflow_handover_message',
    DialogflowServiceUnavailableMessage = 'dialogflow_service_unavailable_message',
    DialogflowCloseChatMessage = 'dialogflow_close_chat_message',
}

export enum DefaultMessage {
    DEFAULT_DialogflowServiceUnavailableMessage = 'Sorry, I\'m having trouble answering your question.',
}

export const settings: Array<ISetting> = [
    {
        id: AppSetting.DialogflowBotUsername,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'bot_username',
        required: true,
    },
    {
        id: AppSetting.DialogflowProjectId,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_project_id',
        required: true,
    },
    {
        id: AppSetting.DialogflowClientEmail,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_client_email',
        required: true,
    },
    {
        id: AppSetting.DialogFlowPrivateKey,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_private_key',
        required: true,
    },
    {
        id: AppSetting.DialogflowFallbackResponsesLimit,
        public: true,
        type: SettingType.NUMBER,
        packageValue: 0,
        value: 0,
        i18nLabel: 'dialogflow_fallback_responses_limit',
        i18nDescription: 'dialogflow_fallback_responses_limit_description',
        required: false,
    },
    {
        id: AppSetting.FallbackTargetDepartment,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'target_department_for_handover',
        i18nDescription: 'target_department_for_handover_description',
        required: false,
    },
    {
        id: AppSetting.DialogflowHandoverMessage,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_handover_message',
        i18nDescription: 'dialogflow_handover_message_description',
        required: false,
    },
    {
        id: AppSetting.DialogflowServiceUnavailableMessage,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_service_unavailable_message',
        i18nDescription: 'dialogflow_service_unavailable_message_description',
        required: false,
    },
    {
        id: AppSetting.DialogflowCloseChatMessage,
        public: true,
        type: SettingType.STRING,
        packageValue: '',
        i18nLabel: 'dialogflow_close_chat_message',
        i18nDescription: 'dialogflow_close_chat_message_description',
        required: false,
    },
];
