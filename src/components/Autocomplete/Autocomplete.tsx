import { Chip, Typography } from '@material-ui/core';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';
import React from 'react';

import { StyledChipContainer, StyledTextInput } from './styled';
import { AutocompletePropsTypes, OptionType } from './types';

const Autocomplete = (props: AutocompletePropsTypes) => {
    const { onDelete, ...rest } = props;

    return (
        <>
            <MuiAutocomplete
                {...rest}
                renderTags={() => null}
                renderInput={(params) => <StyledTextInput {...params} variant="outlined" label="select options" />}
                renderOption={(option: OptionType) => <Typography>{option.title}</Typography>}
            />
            <StyledChipContainer>
                {onDelete &&
                    (Array.isArray(rest.value) ? (rest.value as OptionType[]) : []).map((v) => (
                        <div key={v.title}>
                            <Chip key={v.title} label={v.title} onDelete={() => (onDelete ? onDelete(v.title) : [])} />
                        </div>
                    ))}
            </StyledChipContainer>
        </>
    );
};

export default Autocomplete;
