import { ButtonState, makeStyles, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';





const useStyles = makeStyles({
    root: {
      // These are all unique to Fancy theme.
      border: '2px solid green', 
      backgroundColor: 'pink', 
      borderRadius: '64px', 
    },
  });
  
export  const useFancyButtonStyles = (state: unknown) => {
    const buttonState = state as ButtonState;
  
    const styles = useStyles();
  
    buttonState.root.className = mergeClasses(buttonState.root.className, styles.root);
  };
  
  
  
export const FancyCustomStyleHooks: CustomStyleHooksContextValue = {
    useButtonStyles_unstable: useFancyButtonStyles
};