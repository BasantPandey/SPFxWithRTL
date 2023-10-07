import * as React from 'react';
import { IPeopleProps } from './IPeopleProps';
import { PeoplePicker, PrincipalType } from "@pnp/spfx-controls-react/lib/PeoplePicker";
export default class PepoleEx extends React.Component<IPeopleProps, {}> {
    constructor(props: IPeopleProps) {
        super(props);
        this.state = {
            status: 'Ready'
        };
    }
    public render(): React.ReactElement<IPeopleProps> {
        return (
            <div>
                <p>This is just an example of People Picker</p>
                 <PeoplePicker
                    context={this.props.context}
                    titleText="People Picker"
                    personSelectionLimit={3}
                    showtooltip={true}
                    required={true}
                    showHiddenInUI={false}
                    principalTypes={[PrincipalType.User]}
                    resolveDelay={1000} /> 
            </div>
        );
    }
}