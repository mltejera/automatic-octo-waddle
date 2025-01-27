import { ButtonState, makeStyles, mergeClasses } from '@fluentui/react-components';
import { CustomStyleHooksContextValue_unstable as  CustomStyleHooksContextValue} from '@fluentui/react-shared-contexts';





export const useFancyButtonStyles = makeStyles({
    root: {
      border: '2px solid green', // this is shared between the two themes
      backgroundColor: 'pink', // this is unique to the Fancy theme
      borderRadius: '64px', // this is unique to the Fancy
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