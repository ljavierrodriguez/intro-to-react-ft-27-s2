import React from 'react'
import Button from './components/Button'
import { Alert } from './components/Alert'
import { Menu } from './components/Menu'

const App = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Menu />
                        <h1>App React</h1>
                        <Button variant="primary" text="Button 1" />
                        <Button variant="secondary" text="Button 2" />
                        <Button variant="danger" text="Button 3" />
                        <Button variant="warning" text="Button 4" />
                        <Alert className="primary">
                            <i class="bi bi-exclamation-octagon me-1"></i> 
                            Alert 1
                        </Alert>
                        <Alert className="secondary">
                            <i class="bi bi-exclamation-octagon me-1"></i> 
                            Alert 2
                        </Alert>
                        <Alert className="danger">
                            <i class="bi bi-exclamation-triangle-fill m-1"></i>
                            Alert 3
                        </Alert>
                        <Alert className="info">
                            <h1>Nota:</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem laborum expedita distinctio recusandae doloribus cumque corrupti. Cupiditate, voluptatibus harum voluptas aliquid, dolorum mollitia accusamus amet repellat magnam consequatur sint illo.</p>
                            <Button variant="dark" text="Call to Action" />
                        </Alert>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App