import { ButtonState, makeStyles, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';





export const useFancyButtonStyles = makeStyles({
    root: {
      // These are all unique to Fancy theme.
      border: '2px solid green', 
      backgroundColor: 'pink', 
      borderRadius: '64px', 
    },
  });
  
  const useCustomButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    const styles = useFancyButtonStyles();
  
    buttonState.root.className = mergeClasses(buttonState.root.className, styles.root);
  };
  
  
  
export const FancyCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useCustomButtonStyles
};