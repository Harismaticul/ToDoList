import React from "react";

interface SearchPanelProps{
    filterText: string
    onFilterStringChanged(newFilterString:string):void;
}

export class SearchPanel extends React.Component<SearchPanelProps, {}>{

    constructor(props: SearchPanelProps){
        super(props)
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(e:React.FormEvent<HTMLInputElement>){
        this.props.onFilterStringChanged(e.currentTarget.value);
    }

    render() {
        return(
            <div>
                <input type="text" value={this.props.filterText} onChange={this.handleTextChange}/>
            </div>
        );
    }
}