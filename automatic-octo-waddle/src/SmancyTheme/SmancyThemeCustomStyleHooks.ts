import { ButtonState, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';
import { useFancyButtonStyles } from '../FancyTheme/FancyThemeCustomStyleHooks';
import { useSmartButtonStyles } from '../SmartTheme/SmartThemeCustomStyleHooks';




  
  export const useSmancyCustomButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    const fancyStyles = useFancyButtonStyles();
    const smartStyles = useSmartButtonStyles();

  
    buttonState.root.className = mergeClasses(buttonState.root.className, fancyStyles.root, smartStyles.root) ;
  };
  
  
  
export const SmancyCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useSmancyCustomButtonStyles
};