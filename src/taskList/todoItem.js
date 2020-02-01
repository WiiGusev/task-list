import React, { useContext } from 'react';
import { Context } from '../context';
import { 
    Checkbox, 
    FormControlLabel,
    Button, 
    Divider,
    ExpansionPanel, 
    ExpansionPanelSummary, 
    ExpansionPanelDetails,
    ExpansionPanelActions
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default function TodoItem({title, description, id, completed}) {
    const { dispatch } = useContext(Context);

    const editTask = (id, type) => () => {
        dispatch({
            type,
            payload: id
        })
    } 
    
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id={`additional-actions1-header-${id}`}
            >
                <FormControlLabel
                    className={completed && 'completed'}
                    onClick={event => event.stopPropagation()}
                    onFocus={event => event.stopPropagation()}
                    control={<Checkbox 
                        checked={completed} 
                        onChange={editTask(id, 'toggle')}
                        color="primary"
                    />}
                    label={title}
                />          
            </ExpansionPanelSummary> 
            <ExpansionPanelDetails>
                <p>{description || "Описание отсутствует"}</p>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
            <Button variant="contained" color="secondary" onClick={editTask(id, 'remove')}>
                Удалить
            </Button>
            </ExpansionPanelActions>
        </ExpansionPanel>
    )
}