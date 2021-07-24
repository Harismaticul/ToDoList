import React from 'react';

interface SearchPanelProps{
    filterText : string
    onFilterStringChanged(newFilterString: string): void;
}

export class SearchPanel extends React.Component<SearchPanelProps, {}>{
    constructor(props: SearchPanelProps){
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }

    handleSearchTextChange(e:React.FormEvent<HTMLInputElement>){
        this.props.onFilterStringChanged(e.currentTarget.value);
    }

    render(){
        const filterText = this.props.filterText;
        return (
        <div>
            <input type="text" value={filterText} onChange={this.handleSearchTextChange}/>
        </div>
        );
    }
}