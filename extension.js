({
    name: "IFTTT Webhooks", // Category Name
    description: "allows you to integrate other services on IFTTT",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="iftttt_webhook">
                    <value name="key">
                        <shadow type="text">
                            <field name="TEXT">--IFTTT-Key--</field>
                        </shadow>
                    </value>
                    <value name="event">
                        <shadow type="text">
                            <field name="TEXT">--IFTTT-Key--</field>
                        </shadow>
                    </value>
                    <value name="value1">
                        <shadow type="text">
                            <field name="TEXT">--IFTTT-Value1--</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
