import React, { forwardRef, memo } from 'react';

import { Wrapper } from './styled';
import { ButtonProps } from './types';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    const { children, disabled = false, onClick, secondary = false, type = 'button', ...rest } = props;

    return (
        <Wrapper disabled={disabled} onClick={onClick} ref={ref} type={type}>
            {children}
        </Wrapper>
    );
});

export { Wrapper as StyledButton };
export default memo(Button);
