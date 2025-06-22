import type {TreeData} from "../../data/treeData.ts";
import {TreeNode} from "../TreeNode/TreeNode.tsx";
import {memo} from "react";
import {useNodeStore} from "../../store/useNodeStore.ts";

interface TreeProps {
    data: TreeData[];
}

export const Tree = memo(({ data } : TreeProps) => {
    const setSelectedNodeId = useNodeStore(state => state.setSelectedNodeId);

    const handleTreeClick = () => {
        setSelectedNodeId(null);
    }

    return (
        <div className="tree" onClick={handleTreeClick}>
            {data.map((node) => (
                <TreeNode
                    key={node.id}
                    id={node.id}
                    name={node.name}
                    parentId={undefined}
                    children={node.children}
                />
            ))}
        </div>
    );
});