import { ButtonState } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';
import { useFancyButtonStyles } from '../FancyTheme/FancyThemeCustomStyleHooks';
import { useSmartButtonStyles } from '../SmartTheme/SmartThemeCustomStyleHooks';




  
  export const useSmancyCustomButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    useFancyButtonStyles(buttonState);
    // smart comes second, so it will win.
    useSmartButtonStyles(buttonState);
  };
  
  
  
export const SmancyCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useSmancyCustomButtonStyles
};