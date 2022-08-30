import { ContextSettingsProvider } from './SettingsContext';
import { ContextUserProvider } from './UserContext';

import { combineComponents } from './combineComponents';

const providers = [
    ContextSettingsProvider,
    ContextUserProvider
]
export const AppContextProvider = combineComponents(...providers);