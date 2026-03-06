//Cytoscape graphing script
document.addEventListener("DOMContentLoaded", function () {

    const cy = cytoscape({
        container: document.getElementById('cytoscape'),

        //Cytoscape Syntax to style graph
        elements: [
            //Making connections with edges and nodes
            { data: { id: 'PC1', type: 'pc'} },// Adding elements: id: 'name', type: 'name'
            { data: { id: 'Switch', type: 'switch' } },
            { data: { id: 'Router1', type: 'router' } },
            { data: { id: 'Router2', type: 'router' } },
            { data: { id: 'PC2', type: 'pc'} },
            { data: { id: 'Switch2', type: 'switch' } },
            { data: { id: 'link2', source: 'Router2', target: 'Router1' } },//Adding a Link between nodes
            { data: { id: 'link3', source: 'Switch', target: 'PC1' } },
            { data: { id: 'link4', source: 'Router1', target: 'Switch' } },
            { data: { id: 'link5', source: 'PC2', target: 'Switch2' } },
            { data: { id: 'link6', source: 'Switch2', target: 'Router2' } }
        ],

        //Style elements in graph
        style: [
            {
                selector: 'node[type="pc"]',
                style: {
                    'background-image': 'icons/computer.png',
                    'background-color': '#172738',
                    'label': 'data(id)',
                    'color': '#fff',
                    'text-halign': 'center'
                }
            },
            {
                selector: 'edge',
                style: {
                    'width': 3,
                    'line-color': '#ccc'
                }
            },
            {
                selector: 'node[type="switch"]',
                style: {
                    'background-image': 'icons/switch.png',
                    'background-color': '#172738',
                    'label': 'data(id)',
                    'color': '#fff',
                    'text-halign': 'center',
                    'width': 60,
                    'height': 60
                }
            },
            {
                selector: 'node[type="router"]',
                style: {
                    'background-image': 'icons/router.png',
                    'background-color': '#172738',
                    'label': 'data(id)',
                    'color': '#fff',
                    'text-halign': 'left',
                    'width': 40,
                    'height': 40
                }
            },

        ],
        layout: {
            name: 'circle'
        }
    });
    
    //Graph behavior. If you tap-click node PC1 it removes that node.
    cy.on('tap', 'node[type="pc"]', function(evt) {
        console.log(evt.target.id());
        cy.$('#PC1').remove();

    });
});
