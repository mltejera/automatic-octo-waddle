import { ButtonState, makeStyles, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';





export const useSmartButtonStyles = makeStyles({
    root: {
      backgroundColor: 'yellow', // This is unique to smart and should win in conflicts with Fancy
    },
  });
  
  export const useCustomButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    const styles = useSmartButtonStyles();
  
    buttonState.root.className = mergeClasses(buttonState.root.className, styles.root);
  };
  
  
  
export const SmartCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useCustomButtonStyles
};