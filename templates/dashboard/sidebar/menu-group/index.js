import './index.html';

Template.menuGroup.helpers({
    treeViewStyle() {
        const {open} = Template.instance().data;
        return open ? 'display: block' : 'display: none';
    }
})
